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

  toJSON() {}

  toString() {
    const { prop, value } = this;
    const cssProp = STYLE_CONVERSIONS[prop];

    return `${cssProp}: ${value};`;
  }
}
