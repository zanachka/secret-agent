import { ipcRenderer } from 'electron';
import { action, computed, observable } from 'mobx';
import { TAB_ANIMATION_DURATION, TAB_MAX_WIDTH, TAB_MIN_WIDTH, TABS_PADDING } from './constants';
import { closeWindow } from '../../pages/app/utils/windows';
import { animateTab } from '../../pages/app/utils/tabs';
import ITabLocation from '~shared/interfaces/ITabLocation';
import ITabMeta from '~shared/interfaces/ITabMeta';
import ISaSession from '~shared/interfaces/ISaSession';
import store from '../app';

export default class TabFrontend {
  @observable
  public id: number;

  @observable
  public location: ITabLocation;

  @observable
  public saSession: ISaSession;

  @observable
  public isDragging = false;

  @observable
  public loading = true;

  @observable
  public currentTickValue = 0;

  @observable
  public currentUrl = 'Loading';

  public width = TAB_MAX_WIDTH;
  public left = 0;

  public isClosing = false;
  public ref: HTMLElement;

  public removeTimeout: any;

  public marginLeft = 0;

  @observable
  public marks: number[] = [];

  @observable
  public isPlaying = false;

  private interval: number;

  @computed
  public get favicon() {
    if (this.location && this.location === 'NewTab') {
      return '';
    }
    if (this.location) {
      return this.location;
    }
    return '';
  }

  @computed
  public get title() {
    if (this.location && this.location === 'NewTab') {
      return 'New Tab';
    }
    if (this.location) {
      return this.location;
    }
    return this.saSession?.scriptEntrypoint;
  }

  @computed
  public get isScriptLocation() {
    if (!this.location) {
      return true;
    }
    return false;
  }

  @computed
  public get isSelected() {
    return store.tabs.selectedTabId === this.id;
  }

  @computed
  public get isHovered() {
    return store.tabs.hoveredTabId === this.id;
  }

  @computed
  public get isExpanded() {
    return this.isHovered || this.isSelected || !store.tabs.scrollable;
  }

  @computed
  public get isIconSet() {
    return this.favicon !== '' || this.loading;
  }

  public constructor({ id, location, saSession, active }: ITabMeta) {
    this.id = id;
    this.location = location;
    this.saSession = saSession;

    if (active) {
      this.select();
      if (saSession) {
        // @ts-ignore
        window.requestIdleCallback(() => this.startPlayback());
      }
    }
  }

  public pausePlayback() {
    this.isPlaying = false;
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  public startPlayback() {
    this.isPlaying = true;
    clearInterval(this.interval);
    let intervalTime = 50;
    if (this.marks.length > 100) intervalTime = 20;
    else if (this.marks.length < 5) intervalTime = 500;
    this.interval = setInterval(this.playbackTick.bind(this), intervalTime) as any;
  }

  public updateSession(session: ISaSession) {
    const isPlaying = this.isPlaying;
    if (isPlaying) this.pausePlayback();
    const startSessionMillis = this.saSession?.durationMillis;
    this.saSession = session;

    const marks = [];
    if (this.saSession) {
      for (const tick of this.saSession.ticks) {
        marks.push(tick.playbarOffsetPercent);
      }
    } else {
      this.currentTickValue = 0;
    }
    this.marks = marks;

    if (startSessionMillis && this.currentTickValue) {
      if (session.durationMillis < startSessionMillis) {
        this.currentTickValue =
          this.currentTickValue * (session.durationMillis / startSessionMillis);
      } else {
        this.currentTickValue =
          this.currentTickValue * (startSessionMillis / session.durationMillis);
      }
    }
    if (isPlaying) this.startPlayback();
  }

  @action
  public async select() {
    store.tabs.selectedTabId = this.id;
    if (!this.isClosing) {
      await ipcRenderer.invoke('tab:select', this.id);
    }
  }

  public getWidth(containerWidth: number = null, tabs: TabFrontend[] = null) {
    if (containerWidth === null) {
      containerWidth = store.tabs.containerWidth;
    }

    if (tabs === null) {
      tabs = store.tabs.list.filter(x => !x.isClosing);
    }

    const realTabsLength = tabs.length + store.tabs.removedTabs;

    const width =
      containerWidth / realTabsLength - TABS_PADDING - store.tabs.leftMargins / realTabsLength;

    if (width > TAB_MAX_WIDTH) {
      return TAB_MAX_WIDTH;
    }
    if (width < TAB_MIN_WIDTH) {
      return TAB_MIN_WIDTH;
    }

    return width;
  }

  public getLeft(calcNewLeft = false) {
    const tabs = store.tabs.list.filter(x => !x.isClosing).slice();

    const index = tabs.indexOf(this);

    let left = 0;

    if (calcNewLeft) store.tabs.calculateTabMargins();

    for (let i = 0; i < index; i += 1) {
      left +=
        (calcNewLeft ? tabs[i].getWidth() : tabs[i].width) + TABS_PADDING + tabs[i].marginLeft;
    }

    return left + this.marginLeft;
  }

  @action
  public setLeft(left: number, animation: boolean) {
    animateTab('translateX', left, this.ref, animation);
    this.left = left;
  }

  @action
  public setWidth(width: number, animation: boolean) {
    animateTab('width', width, this.ref, animation);
    this.width = width;
  }

  @action
  public close() {
    this.pausePlayback();
    const selected = store.tabs.selectedTabId === this.id;

    ipcRenderer.send('tab:destroy', this.id);

    const notClosingTabs = store.tabs.list.filter(x => !x.isClosing);
    let index = notClosingTabs.indexOf(this);

    if (notClosingTabs.length === 1) {
      closeWindow();
    }

    this.isClosing = true;
    if (notClosingTabs.length - 1 === index) {
      const previousTab = store.tabs.list[index - 1];
      if (previousTab) {
        this.setLeft(previousTab.getLeft(true) + this.getWidth(), true);
      }
      store.tabs.updateTabsBounds(true);
    } else {
      store.tabs.removedTabs += 1;
    }

    this.setWidth(TAB_MIN_WIDTH, true);
    store.tabs.setTabsLefts(true);

    if (selected) {
      index = store.tabs.list.indexOf(this);

      if (
        index + 1 < store.tabs.list.length &&
        !store.tabs.list[index + 1].isClosing &&
        !store.tabs.scrollable
      ) {
        const nextTab = store.tabs.list[index + 1];
        nextTab.select();
      } else if (index - 1 >= 0 && !store.tabs.list[index - 1].isClosing) {
        const prevTab = store.tabs.list[index - 1];
        prevTab.select();
      }
    }

    this.removeTimeout = setTimeout(() => {
      store.tabs.removeTab(this.id);
    }, TAB_ANIMATION_DURATION);
  }

  public async reload(): Promise<any> {
    this.pausePlayback();
    return await ipcRenderer.invoke('tab:reload', this.id);
  }

  private playbackTick() {
    if (this.isSelected === false) {
      return this.pausePlayback();
    }

    let nextTickValue = this.currentTickValue;
    for (const tick of this.saSession.ticks) {
      // if a new major tick exists, go to it
      if (tick.playbarOffsetPercent > this.currentTickValue) {
        nextTickValue = tick.playbarOffsetPercent;
        break;
      }
      // check for next minor tick
      for (const minor of tick.minorTicks) {
        if (minor.playbarOffsetPercent > this.currentTickValue) {
          nextTickValue = minor.playbarOffsetPercent;
          break;
        }
      }
      if (nextTickValue > this.currentTickValue) break;
    }

    if (nextTickValue === this.currentTickValue && this.saSession.closeDate) {
      this.pausePlayback();
    }

    this.currentTickValue = nextTickValue;

    ipcRenderer.send('on-tick', this.currentTickValue);
  }
}