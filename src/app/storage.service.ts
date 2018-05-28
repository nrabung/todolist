import { Injectable } from '@angular/core';

export interface IAllItems {
  [key: string]: object;
}

export interface IStorageProvider {
  get(key: string): Promise<object>;
  getAll(): Promise<IAllItems>;
  remove(key: string): Promise<void>;
  set(key: string, value: object): Promise<void>;
}

class LocalStorageStorageProvider implements IStorageProvider {
  get(key: string): Promise<object> {
    return new Promise<object>((resolve: (value: object) => void, reject: (reason: any) => void) => {
      resolve(JSON.parse(window.localStorage.getItem(key)));
    });
  }

  getAll(): Promise<IAllItems> {
    return new Promise<IAllItems>((resolve: (value: IAllItems) => void, reject: (reason: any) => void) => {
      const items: IAllItems = {};

      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);

        items[key] = JSON.parse(window.localStorage.getItem(key));
      }

      resolve(items);
    });
  }

  remove(key: string): Promise<void> {
    return new Promise<void>((resolve: () => void, reject: (reason: any) => void) => {
      window.localStorage.removeItem(key);
      resolve();
    });
  }

  set(key: string, value: object): Promise<void> {
    return new Promise<void>((resolve: () => void, reject: (reason: any) => void) => {
      window.localStorage.setItem(key, JSON.stringify(value));
      resolve();
    });
  }
}


@Injectable()
export class StorageService implements IStorageProvider {
  provider: IStorageProvider = undefined;

  constructor() {
    if ('localStorage' in window) {
      this.provider = new LocalStorageStorageProvider();
    } else {
      throw new Error('No Storage accessible');
    }
  }

  get(key: string): Promise<object> {
    return this.provider.get(key);
  }

  getAll(): Promise<IAllItems> {
    return this.provider.getAll();
  }

  remove(key: string): Promise<void> {
    return this.provider.remove(key);
  }

  set(key: string, value: object): Promise<void> {
    return this.provider.set(key, value);
  }
}

