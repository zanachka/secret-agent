import * as http from 'http';
import { createPromise, IResolvablePromise } from '@secret-agent/commons/utils';
import ResourceType, {
  getResourceTypeForChromeValue,
} from '@secret-agent/core-interfaces/ResourceType';
import OriginType, { isOriginType } from '@secret-agent/commons/interfaces/OriginType';
import { EventEmitter } from 'events';
import IHttpRequestModifierDelegate from '@secret-agent/commons/interfaces/IHttpRequestModifierDelegate';
import { ClientHttp2Session } from 'http2';
import SocketConnectDriver from '../lib/SocketConnectDriver';
import IHttpResourceLoadDetails from '@secret-agent/commons/interfaces/IHttpResourceLoadDetails';
import { URL } from 'url';
import IHttpOrH2Response from '../interfaces/IHttpOrH2Response';
import IResourceRequest from '@secret-agent/core-interfaces/IResourceRequest';
import Protocol from 'devtools-protocol';
import Network = Protocol.Network;
import Log from '../../commons/Logger';

const { log } = Log(module);

export default class RequestSession {
  public static sessions: { [sessionId: string]: RequestSession } = {};
  public static requestUpgradeSessionLookup: {
    [headersHash: string]: IResolvablePromise<IRequestUpgradeLookup>;
  } = {};
  private static headerSessionIdPrefix: string = 'mitm-session-id-';

  public delegate: IHttpRequestModifierDelegate = {};

  public isClosing = false;
  public blockImages: boolean = false;
  public blockUrls: string[] = [];
  public blockResponseHandlerFn?: (
    request: http.IncomingMessage,
    response: http.ServerResponse,
  ) => boolean;
  public http2Sessions: IHttp2Session[] = [];
  public socketConnects: SocketConnectDriver[] = [];
  public requests: IHttpResourceLoadDetails[] = [];

  private readonly pendingResources: IPendingResourceLoad[] = [];
  private emitter = new EventEmitter();

  constructor(
    readonly sessionId: string,
    readonly useragent: string,
    readonly upstreamProxyUrlProvider: Promise<string>,
  ) {
    RequestSession.sessions[sessionId] = this;
  }

  public on<K extends keyof IRequestSessionEvents>(
    eventType: K,
    listenerFn: (this: this, event: IRequestSessionEvents[K]) => any,
  ) {
    this.emitter.on(eventType, listenerFn);
    return this;
  }

  public emit<K extends keyof IRequestSessionEvents>(
    eventType: K,
    event: IRequestSessionEvents[K],
  ) {
    return this.emitter.emit(eventType, event);
  }

  public async getWebsocketUpgradeRequestId(headers: { [name: string]: string }) {
    const session = await RequestSession.waitForWebsocketSessionId(headers, 0);
    return session.browserRequestId;
  }

  public async waitForBrowserResourceRequest(
    url: string,
    method: string,
    headers: { [name: string]: string },
  ) {
    const resourceIdx = this.getResourceIndex(url, method);
    let resource = resourceIdx >= 0 ? this.pendingResources[resourceIdx] : null;
    if (!resource) {
      resource = {
        url,
        method,
        load: createPromise<IPendingResourceLoad>(),
      };
      this.pendingResources.push(resource);
    }

    await resource.load.promise;

    return {
      browserRequestId: resource.browserRequestId,
      resourceType: resource.resourceType,
      originType: RequestSession.getOriginType(url, headers),
      hasUserGesture: resource.hasUserGesture,
      isUserNavigation: resource.isUserNavigation,
      documentUrl: resource.documentUrl,
    };
  }

  public trackResource(resource: IHttpResourceLoadDetails) {
    this.requests.push(resource);
    const redirect = this.requests.find(x => x.redirectedToUrl === resource.url);
    resource.isFromRedirect = !!redirect;
    if (redirect) {
      resource.previousUrl = redirect.url;
      resource.firstRedirectingUrl = redirect.url;
      if (redirect.isFromRedirect) {
        const seen = new Set();
        let prev = redirect;
        while (prev.isFromRedirect) {
          prev = this.requests.find(x => x.redirectedToUrl === prev.url);
          if (seen.has(prev)) break;
          seen.add(prev);
          if (!prev) break;
        }
        if (prev) {
          resource.firstRedirectingUrl = prev.url;
        }
      }
    }
  }

  public registerResource(params: {
    browserRequestId: string;
    url: string;
    method: string;
    resourceType: Network.ResourceType;
    hasUserGesture: boolean;
    documentUrl: string;
    isUserNavigation: boolean;
  }) {
    const { url, method, resourceType } = params;

    const resourceIdx = this.getResourceIndex(url, method);
    let resource: IPendingResourceLoad;
    if (resourceIdx >= 0) {
      resource = this.pendingResources[resourceIdx];
    } else {
      resource = {
        url,
        method,
        load: createPromise<IPendingResourceLoad>(),
      } as IPendingResourceLoad;
      this.pendingResources.push(resource);
    }

    resource.browserRequestId = params.browserRequestId;
    resource.documentUrl = params.documentUrl;
    resource.resourceType = getResourceTypeForChromeValue(resourceType);
    resource.hasUserGesture = params.hasUserGesture;
    resource.isUserNavigation = params.isUserNavigation;
    resource.load.resolve(resource);
  }

  // ugly workaround because chrome won't let me intercept http upgrades or add headers
  public registerWebsocketHeaders(browserRequestId: string, headers: object) {
    const headersKey = [];
    for (const key of websocketHeadersForKey) {
      headersKey.push(`${key}=${headers[key]}`);
    }

    const key = headersKey.join(',');
    if (!RequestSession.requestUpgradeSessionLookup[key]) {
      RequestSession.requestUpgradeSessionLookup[key] = createPromise<IRequestUpgradeLookup>();
    }
    RequestSession.requestUpgradeSessionLookup[key].resolve({
      sessionId: this.sessionId,
      browserRequestId,
    });
  }

  public async getUpstreamProxyUrl() {
    return this.upstreamProxyUrlProvider ? this.upstreamProxyUrlProvider : null;
  }

  public getTrackingHeaders() {
    return {
      [`${RequestSession.headerSessionIdPrefix}${this.sessionId}`]: '1',
    };
  }

  public async close() {
    this.isClosing = true;
    for (const headersKey of Object.keys(RequestSession.requestUpgradeSessionLookup)) {
      const wsSession = RequestSession.requestUpgradeSessionLookup[headersKey];
      if (wsSession.isResolved) {
        const session = await wsSession.promise;
        if (session.sessionId === this.sessionId) {
          delete RequestSession.requestUpgradeSessionLookup[headersKey];
        }
      }
    }

    while (this.http2Sessions.length) {
      const session = this.http2Sessions.shift();
      await new Promise(resolve => session.client.close(() => resolve()));
    }

    while (this.socketConnects.length) {
      const socket = this.socketConnects.shift();
      await socket.close();
    }
    delete RequestSession.sessions[this.sessionId];
  }

  public shouldBlockRequest(url: string) {
    if (!this.blockUrls) {
      return false;
    }
    for (const blockedUrlFragment of this.blockUrls) {
      if (url.includes(blockedUrlFragment)) {
        return true;
      }
    }
    return false;
  }

  public trackH2Session(
    authority: string,
    client: ClientHttp2Session,
    socketConnect: SocketConnectDriver,
  ) {
    client.on('goaway', args => {
      log.info('Http2.goaway', {
        sessionId: this.sessionId,
        args,
      });
      this.closeH2Session(client);
    });
    client.on('close', () => {
      log.info('Http2.close', {
        sessionId: this.sessionId,
      });
      this.closeH2Session(client);
    });
    this.http2Sessions.push({
      origin: authority,
      client,
      connect: socketConnect,
    });
  }

  public closeH2Session(client: ClientHttp2Session) {
    const index = this.http2Sessions.findIndex(x => client);
    if (index < 0) return;

    const [session] = this.http2Sessions.splice(index, 1);
    client.close();
    session.connect.close();
  }

  // function to override for
  public blockHandler(request: http.IncomingMessage, response: http.ServerResponse) {
    if (this.blockResponseHandlerFn) return this.blockResponseHandlerFn(request, response);
    return false;
  }

  public recordDocumentUserActivity(documentUrl: string) {
    if (this.delegate?.documentHasUserActivity) {
      this.delegate?.documentHasUserActivity(documentUrl);
    }
  }

  private getResourceIndex(url: string, method: string) {
    return this.pendingResources.findIndex(x => {
      return x.url === url && x.method === method;
    });
  }

  public static async close() {
    for (const session of Object.values(RequestSession.sessions)) {
      await session.close();
    }
  }

  public static getOriginType(url: string, headers: { [name: string]: string }): OriginType {
    if (isOriginType(headers['Sec-Fetch-Site'])) {
      return headers['Sec-Fetch-Site'] as OriginType;
    }

    let origin = headers.Origin ?? headers.origin;
    if (!origin) {
      const referer = headers.Referer ?? headers.referer;
      if (referer) origin = new URL(referer).origin;
    }
    let originType: OriginType = 'none';
    if (origin) {
      const urlOrigin = new URL(url).origin;
      if (urlOrigin === origin) {
        originType = 'same-origin';
      } else if (urlOrigin.includes(origin) || origin.includes(urlOrigin)) {
        originType = 'same-site';
      } else {
        originType = 'cross-site';
      }
    }
    return originType;
  }

  public static async getSession(
    headers: { [name: string]: string },
    method: string,
    isWebsocket: boolean = false,
    timeout = 10e3,
  ) {
    let sessionId = RequestSession.getSessionId(headers, method);
    if (!sessionId && isWebsocket) {
      const result = await RequestSession.waitForWebsocketSessionId(headers, timeout);
      sessionId = result.sessionId;
    }
    return RequestSession.sessions[sessionId];
  }

  public static getSessionId(headers: { [name: string]: string }, method: string) {
    const keys = Object.keys(headers);
    const accessControlHeaders = Object.entries(headers).find(([key]) =>
      key.match(/access-control-request-headers/i),
    );
    // preflight
    if (accessControlHeaders && method === 'OPTIONS') {
      keys.push(...accessControlHeaders[1].split(','));
    }

    for (const key of keys) {
      if (key.startsWith(RequestSession.headerSessionIdPrefix)) {
        return key.replace(RequestSession.headerSessionIdPrefix, '');
      }
    }
  }

  public static async waitForWebsocketSessionId(
    headers: { [name: string]: string },
    timeout: number,
  ) {
    const headersKey: string[] = [];
    for (const key of websocketHeadersForKey) {
      headersKey.push(`${key}=${headers[key]}`);
    }
    const key = headersKey.join(',');
    if (!RequestSession.requestUpgradeSessionLookup[key]) {
      RequestSession.requestUpgradeSessionLookup[key] = createPromise<IRequestUpgradeLookup>(
        timeout,
      );
    }

    return RequestSession.requestUpgradeSessionLookup[key].promise;
  }
}

interface IRequestSessionEvents {
  response: IRequestSessionResponseEvent;
  request: IRequestSessionRequestEvent;
  httpError: IRequestSessionHttpErrorEvent;
}

export interface IRequestSessionResponseEvent {
  browserRequestId: string;
  request: IResourceRequest;
  response: IHttpOrH2Response;
  wasCached: boolean;
  resourceType: ResourceType;
  remoteAddress: string;
  body: Buffer;
  requestTime: Date;
  redirectedToUrl?: string;
}

export interface IRequestSessionRequestEvent {
  request: http.IncomingMessage;
}

export interface IRequestSessionHttpErrorEvent {
  request: http.IncomingMessage;
  error: Error;
}

export interface IHttp2Session {
  origin: string;
  client: ClientHttp2Session;
  connect: SocketConnectDriver;
}

const websocketHeadersForKey = [
  'Accept-Encoding',
  'Cache-Control',
  'Connection',
  'Host',
  'Origin',
  'Pragma',
  'Sec-WebSocket-Extensions',
  'Sec-WebSocket-Key',
  'Sec-WebSocket-Version',
  'Upgrade',
  'User-Agent',
];

interface IPendingResourceLoad {
  url: string;
  method: string;
  load: IResolvablePromise<IPendingResourceLoad>;
  browserRequestId?: string;
  resourceType?: ResourceType;
  documentUrl?: string;
  hasUserGesture?: boolean;
  isUserNavigation?: boolean;
}

interface IRequestUpgradeLookup {
  sessionId: string;
  browserRequestId: string;
}
