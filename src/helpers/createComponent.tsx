import React from "react";
import ECSSRule from "../models/ecssRule";
import { getProvidedStyles } from "./styles";
import { CSSService } from "../services/css";

export const createComponent = <T extends {}>(): React.FC<T> => {
  const Component: React.FC<T> = ({ children, ...props }) => {
    const providedStyles = getProvidedStyles(props);

    const styleList = providedStyles.map(([prop, value]) => {
      return new ECSSRule({ prop, value });
    });

    const cssRule = CSSService.createCSSRule(styleList);
    const className = CSSService.generateClassName();
    CSSService.insertCSSRuleByClassName(className, cssRule);

    return <div className={className}>{children}</div>;
  };

  return Component;
};
