import { STYLE_CONVERSIONS } from "../constants/styleConversions";
import { AllStyleProps } from "../types/style";
import { Theme } from "../types/theme";

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

  toJSON(theme?: Theme) {
    const { prop, value } = this;

    let json: any = {};

    const cssPropData = STYLE_CONVERSIONS[prop];
    const cssProp = cssPropData.toCSS;
    const propIsArray = Array.isArray(cssProp);

    let val: any = value;
    const hasTheme = Boolean(theme && cssPropData.theme);
    if (hasTheme) {
      const themeName = cssPropData.theme?.name!;
      const themeField = theme![themeName];

      const isThemeValue = Object.keys(themeField).includes(value);

      val = isThemeValue ? themeField[value] : value;
    }

    if (propIsArray) {
      (cssProp as string[]).forEach((cssField) => {
        json[cssField] = val;
      });
    } else {
      json[cssProp as string] = val;
    }

    return json;
  }

  toString(theme?: Theme) {
    let str = "";
    const json = theme ? this.toJSON(theme) : this.toJSON();

    for (let key in json) {
      str += `${key}: ${json[key]};`;
    }

    return str;
  }
}
