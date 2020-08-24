import ECSSRule from "../models/ecssRule";

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

    public insertCSSRules(selector: string, cssRules: ECSSRule[]) {
      const rules = cssRules.map((rule) => rule.toString());
      let rule = `${selector} {`;

      rules.forEach((r) => {
        rule += r;
      });

      rule += "}";

      this.styleSheet.insertRule(rule);
    }
  }

  return CSS.getInstance();
})();
