import ECSSRule from "../models/ecssRule";
import { AllStyleProps } from "../types/style";

export const createStyleList = (styles: Object): Array<ECSSRule> => {
  return Object.entries(styles).map(([prop, value]) => {
    return new ECSSRule({ prop: prop as keyof AllStyleProps, value });
  });
};
