import { STYLE_CONVERSIONS } from "./constants/styleConversions";
import { AllStyleProps, Theme } from "./types";

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
    const { toCSS: cssProp, defaultUnit, enclosedByQuotes } = cssPropData;

    const propIsArray = Array.isArray(cssProp);

    let val: any = enclosedByQuotes ? `"${value}"` : value;

    const hasTheme = Boolean(theme && cssPropData.theme);

    if (hasTheme) {
      const themeName = cssPropData.theme?.name!;
      const themeField = theme![themeName];

      // console.log(themeField);
      // console.log(Object.keys(themeField));

      // spacing theme fields support both strs and numbers but the keys are strs
      // convert value to avoid failing the isThemeValue test
      const valueStr = new String(value).toString();
      const isThemeValue = Object.keys(themeField).includes(valueStr);

      // console.log(value);
      // console.log(isThemeValue);

      val = isThemeValue ? themeField[value as keyof typeof themeField] : value;
    }

    if (defaultUnit && typeof val === "number") {
      val = val + defaultUnit;
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
