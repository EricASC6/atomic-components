import ECSSRule from "../models/ecssRule";
import { Style } from "../types/style";

export const createStyleList = (styles: Object): Array<ECSSRule> => {
  return Object.entries(styles).map(([prop, value]) => {
    return new ECSSRule({ prop: prop as keyof Style, value });
  });
};
