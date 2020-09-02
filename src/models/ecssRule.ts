import { STYLE_CONVERSIONS } from "../constants/styleConversions";
import { Style } from "../types/style";

type CSSProp = keyof Style;

interface CSSRuleArgs {
  prop: CSSProp;
  value: any;
}

export default class ECSSRule {
  readonly prop: CSSProp;
  readonly value: any;

  constructor({ prop, value }: CSSRuleArgs) {
    this.prop = prop;
    this.value = value;
  }

  toString() {
    const { prop, value } = this;

    switch (prop) {
      case "px":
      case "paddingX": {
        return `padding-right: ${value}; padding-left: ${value};`;
      }
      case "py":
      case "paddingY": {
        return `padding-top: ${value}; padding-bottom: ${value};`;
      }
      case "mx":
      case "marginX": {
        return `margin-left: ${value}; margin-right: ${value};`;
      }
      case "my":
      case "marginY": {
        return `margin-top: ${value}; margin-bottom: ${value};`;
      }
      case "size": {
        return `width: ${value}; height: ${value};`;
      }
      default: {
        const cssProp = STYLE_CONVERSIONS[prop];
        console.log(value);

        return `${cssProp}: ${value};`;
      }
    }
  }
}
