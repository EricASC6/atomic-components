import uniqid from "uniqid";

// maps hash to classname
export const StyleStore = (() => {
  class StyleStore {
    private store: Map<string, string>;

    constructor() {
      this.store = new Map<string, string>();
    }

    isExistingStyle(hash: string): boolean {
      return this.store.has(hash);
    }

    generateClassName(): string {
      return uniqid();
    }

    insertClassName(hash: string, className: string) {
      this.store.set(hash, className);
    }

    getClassName(hash: string): string | undefined {
      return this.store.get(hash);
    }
  }

  return new StyleStore();
})();
