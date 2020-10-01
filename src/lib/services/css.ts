import ECSSRule from "../models/ecssRule";
import { AllStyleProps } from "../types/style";
import { Theme } from "../types/theme";

export type CSSRule = {
  [K in keyof AllStyleProps]?: AllStyleProps[K];
};

export class CSS {
  readonly styleSheet: CSSStyleSheet;

  constructor() {
    const styleSheet = this.createStyleSheet();
    this.insertStyleSheet(styleSheet);
    this.styleSheet = this.getCSSStyleSheet(styleSheet);
  }

  private createStyleSheet(): HTMLStyleElement {
    const styleSheet = document.createElement("style");
    styleSheet.setAttribute("type", "text/css");
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

  createCSSRule(rules: ECSSRule[], theme: Theme): CSSRule {
    let cssRule: any = {};

    rules.forEach((rule) => {
      const json = rule.toJSON(theme);

      cssRule = Object.assign(cssRule, json);
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

    console.log(rule);

    this.styleSheet.insertRule(rule);
  }
}

export const CSSService = new CSS();
