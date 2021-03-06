import PuppetChrome from '@secret-agent/puppet-chrome';
import { IBoundLog } from '@secret-agent/core-interfaces/ILog';
import Log from '@secret-agent/commons/Logger';
import IPuppetLauncher from '@secret-agent/puppet-interfaces/IPuppetLauncher';
import IPuppetBrowser from '@secret-agent/puppet-interfaces/IPuppetBrowser';
import IBrowserEmulationSettings from '@secret-agent/puppet-interfaces/IBrowserEmulationSettings';
import IBrowserEngine from '@secret-agent/core-interfaces/IBrowserEngine';
import { existsSync } from 'fs';
import launchProcess from './lib/launchProcess';
import { getExecutablePath } from './lib/browserPaths';

const { log } = Log(module);

let puppBrowserCounter = 1;
export default class Puppet {
  public readonly id: number;
  public readonly engine: IBrowserEngine;
  public isShuttingDown: boolean;
  private browserOrError: Promise<IPuppetBrowser | Error>;

  public get isReady(): Promise<IPuppetBrowser> {
    return this.browserOrError.then(x => {
      if (x instanceof Error) throw x;
      return x;
    });
  }

  constructor(engine: IBrowserEngine) {
    this.engine = engine;
    this.isShuttingDown = false;
    this.id = puppBrowserCounter;
    this.browserOrError = null;
    puppBrowserCounter += 1;
  }

  public start(
    args: ILaunchArgs = {
      showBrowser: false,
      pipeBrowserIo: false,
    },
  ): Promise<IPuppetBrowser | Error> {
    if (this.browserOrError) {
      return this.browserOrError;
    }
    this.isShuttingDown = false;

    let launcher: IPuppetLauncher;
    if (this.engine.browser === 'chrome' || this.engine.browser === 'chromium') {
      launcher = PuppetChrome;
    }

    this.browserOrError = this.launchEngine(launcher, args).catch(err => err);
    return this.browserOrError;
  }

  public async newContext(emulation: IBrowserEmulationSettings, logger: IBoundLog) {
    const browser = await this.browserOrError;
    if (browser instanceof Error) throw browser;
    if (this.isShuttingDown) throw new Error('Shutting down');
    return browser.newContext(emulation, logger);
  }

  public async close() {
    if (this.isShuttingDown) return;
    this.isShuttingDown = true;
    log.stats('Puppet.Closing');

    const browserPromise = this.browserOrError;
    this.browserOrError = null;

    try {
      const browser = await browserPromise;
      if (browser && !(browser instanceof Error)) await browser.close();
    } catch (error) {
      log.error('Puppet.Closing:Error', { sessionId: null, error });
    }
  }

  private async launchEngine(
    launcher: IPuppetLauncher,
    args: ILaunchArgs,
  ): Promise<IPuppetBrowser> {
    const executablePath = this.engine.executablePath;

    if (!existsSync(executablePath)) {
      const errorMessageLines = [
        `Failed to launch ${this.engine.browser}@${this.engine.revision} because executable doesn't exist at ${executablePath}`,
      ];

      const packagedPath = getExecutablePath(this.engine.browser, this.engine.revision);
      // If we tried using stock downloaded browser, suggest re-installing SecretAgent.
      if (executablePath === packagedPath)
        errorMessageLines.push(
          `Try re-installing SecretAgent with "npm install secret-agent" or re-install any custom BrowserEmulators.`,
        );
      throw new Error(errorMessageLines.join('\n'));
    }

    try {
      const { pipeBrowserIo, proxyPort, showBrowser } = args;
      const launchArgs = launcher.getLaunchArgs({ showBrowser, proxyPort });
      const launchedProcess = await launchProcess(executablePath, launchArgs, {}, pipeBrowserIo);
      return launcher.createPuppet(launchedProcess, this.engine.revision);
    } catch (err) {
      throw launcher.translateLaunchError(err);
    }
  }
}

interface ILaunchArgs {
  proxyPort?: number;
  showBrowser?: boolean;
  pipeBrowserIo?: boolean;
}
