import uniqid from "uniqid";

export class _StyleStore {
  private store: Map<string, string>;

  constructor() {
    this.store = new Map<string, string>();
  }

  isExistingStyle(hash: string): boolean {
    return this.store.has(hash);
  }

  generateClassName(prefix?: string): string {
    return prefix ? uniqid(prefix + "_") : uniqid();
  }

  insertClassName(hash: string, className: string) {
    this.store.set(hash, className);
  }

  getClassName(hash: string): string | undefined {
    return this.store.get(hash);
  }
}

// maps hash to classname
export const StyleStore = new _StyleStore();
