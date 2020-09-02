import React from "react";
import ECSSRule from "../models/ecssRule";
import { getProvidedStyles } from "./styles";
import { CSSService } from "../services/css";
import { Common } from "../types/common";
import { Style } from "../types/style";
import { Typography } from "../types/typography";
import { Spacing } from "../types/spacing";
import { Flex } from "../types/flex";
import { Layout } from "../types/layout";
import { Position } from "../types/position";

interface CreateComponentArgs {
  defaultHtml?: keyof React.ReactHTML;
}

type ComponentProps<T> = T & { as?: keyof React.ReactHTML };

export const createComponent = <
  T extends Common | Typography | Spacing | Flex | Layout | Position
>({ defaultHtml = "div" }: CreateComponentArgs = {}) => {
  const Component: React.FC<ComponentProps<T>> = ({
    children,
    as = defaultHtml,
    ...props
  }) => {
    console.log(props);

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
