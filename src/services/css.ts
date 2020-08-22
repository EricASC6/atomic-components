import ECSSRule from "../models/ecssRule";

export default class CSS {
  private static instance: CSS;
  readonly styleSheet: CSSStyleSheet;

  private constructor() {
    const currentSheets = document.styleSheets;

    const empty = currentSheets.length === 0;

    if (!empty) {
      this.styleSheet = currentSheets[0] as CSSStyleSheet;
    } else {
      const styleSheet = this.createStyleSheet();
      this.insertStyleSheet(styleSheet);
      this.styleSheet = this.getCSSStyleSheet(styleSheet);
    }
  }

  static getInstance(): CSS {
    if (CSS.instance) return CSS.instance;

    CSS.instance = new CSS();
    return CSS.instance;
  }

  private createStyleSheet(): HTMLStyleElement {
    return document.createElement("style");
  }

  private insertStyleSheet(styleSheet: HTMLStyleElement) {
    document.getElementsByTagName("head")[0].appendChild(styleSheet);
  }

  private getCSSStyleSheet(styleSheet: HTMLStyleElement): CSSStyleSheet {
    return styleSheet.sheet as CSSStyleSheet;
  }

  public insertCSSRule(selector: string, cssRule: ECSSRule) {
    const rule = cssRule.toString();
    this.styleSheet.insertRule(`
        ${selector} {
            ${rule}
        }
    `);
  }
}
