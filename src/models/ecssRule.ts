import { STYLE_CONVERSIONS } from "../constants/styleConversions";
import { AllStyleProps } from "../types/style";

type CSSProp = keyof AllStyleProps;

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

  toJSON() {
    const { prop, value } = this;

    let json: any = {};

    const cssProp = STYLE_CONVERSIONS[prop].toCSS;
    const propIsArray = Array.isArray(cssProp);

    if (propIsArray) {
      (cssProp as string[]).forEach((cssField) => {
        json[cssField] = value;
      });
    } else {
      json[cssProp as string] = value;
    }

    console.log({ json });

    return json;
  }

  toString() {
    let str = "";
    const json = this.toJSON();

    for (let key in json) {
      str += `${key}: ${json[key]};`;
    }

    return str;
  }
}
