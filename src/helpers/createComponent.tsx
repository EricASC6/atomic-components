import React from "react";
import ECSSRule from "../models/ecssRule";
import { getProvidedStyles } from "./styles";
import { CSSService } from "../services/css";
import { Common } from "../types/common";
import { Style } from "../types/style";
import { Typography } from "../types/typography";

interface CreateComponentArgs {
  defaultHtml?: keyof React.ReactHTML;
}

type ComponentProps<T> = T & { as?: keyof React.ReactHTML };

export const createComponent = <T extends Common | Typography | {}>({
  defaultHtml = "div",
}: CreateComponentArgs = {}) => {
  const Component: React.FC<ComponentProps<T>> = ({
    children,
    as = defaultHtml,
    ...props
  }) => {
    const providedStyles = getProvidedStyles(props);

    const styleList = providedStyles.map(([prop, value]) => {
      return new ECSSRule({ prop: prop as keyof Style, value });
    });

    const cssRule = CSSService.createCSSRule(styleList);
    const className = CSSService.generateClassName();
    CSSService.insertCSSRuleByClassName(className, cssRule);

    return React.createElement(
      as,
      {
        className,
      },
      children
    );
  };

  return Component;
};
