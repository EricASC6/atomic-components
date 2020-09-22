import ECSSRule from "../models/ecssRule";
import { AllStyleProps } from "../types/style";

type CSSRule = {
  [K in keyof AllStyleProps]?: AllStyleProps[K];
};

export const CSSService = (() => {
  class CSS {
    readonly styleSheet: CSSStyleSheet;

    constructor() {
      const styleSheet = this.createStyleSheet();
      this.insertStyleSheet(styleSheet);
      this.styleSheet = this.getCSSStyleSheet(styleSheet);
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

    private convertCSSRuleToString(cssRule: CSSRule): string {
      let ruleStr = "";

      for (let [key, value] of Object.entries(cssRule)) {
        ruleStr += `${key}: ${value};`;
      }

      return ruleStr;
    }

    createCSSRule(rules: ECSSRule[]): CSSRule {
      let cssRule: any = {};

      rules.forEach((rule) => {
        cssRule = Object.assign(cssRule, rule.toJSON());
      });

      return cssRule;
    }

    isCSSRuleEmpty(cssRule: CSSRule): boolean {
      const keys = Object.keys(cssRule);
      return keys.length === 0;
    }

    insertCSSRuleByClassName(className: string, cssRule: CSSRule) {
      const cssRuleStr = this.convertCSSRuleToString(cssRule);

      let rule = `.${className} { ${cssRuleStr} }`;

      this.styleSheet.insertRule(rule);
    }
  }

  return new CSS();
})();
