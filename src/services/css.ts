import ECSSRule from "../models/ecssRule";
import uniqid from "uniqid";

export const CSSService = (() => {
  class CSS {
    private static instance: CSS;
    readonly styleSheet: CSSStyleSheet;

    private constructor() {
      const styleSheet = this.createStyleSheet();
      this.insertStyleSheet(styleSheet);
      this.styleSheet = this.getCSSStyleSheet(styleSheet);
    }

    static getInstance(): CSS {
      if (CSS.instance) return CSS.instance;

      CSS.instance = new CSS();
      return CSS.instance;
    }

    private createStyleSheet(): HTMLStyleElement {
      const styleSheet = document.createElement("style");
      styleSheet.setAttribute("data-ec-components", "");
      return styleSheet;
    }

    private insertStyleSheet(styleSheet: HTMLStyleElement) {
      document.getElementsByTagName("head")[0].appendChild(styleSheet);
    }

    private getCSSStyleSheet(styleSheet: HTMLStyleElement): CSSStyleSheet {
      return styleSheet.sheet as CSSStyleSheet;
    }

    generateClassName(): string {
      return uniqid();
    }

    createCSSRule(rules: ECSSRule[]): string {
      let rule = "";

      rules.forEach((r) => (rule += r.toString()));
      return rule;
    }

    insertCSSRuleByClassName(className: string, cssRule: string) {
      let rule = `.${className} { ${cssRule} }`;

      this.styleSheet.insertRule(rule);

      console.log(this.styleSheet);
    }
  }

  return CSS.getInstance();
})();
