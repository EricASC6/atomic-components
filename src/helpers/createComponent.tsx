import React from "react";
import { createStyleList } from "./styles";
import { CSSService } from "../services/css";
import { Common } from "../types/common";
import { Typography } from "../types/typography";
import { Spacing } from "../types/spacing";
import { Flex } from "../types/flex";
import { Layout } from "../types/layout";
import { Position } from "../types/position";
import { Grid } from "../types/grid";

interface CreateComponentArgs {
  defaultHtml?: keyof React.ReactHTML;
  defaultProps?: AllStyleProps;
}

type ComponentProps<T> = T & { as?: keyof React.ReactHTML };

type AllStyleProps = Common &
  Typography &
  Spacing &
  Flex &
  Layout &
  Position &
  Grid;

export const createComponent = <
  T extends Common | Typography | Spacing | Flex | Layout | (Position & Grid)
>({ defaultHtml = "div", defaultProps = {} }: CreateComponentArgs = {}) => {
  const Component: React.FC<ComponentProps<T>> = ({
    children,
    as = defaultHtml,
    ...props
  }) => {
    const styles = props;

    console.log({ styles });

    // final styles with default styles applied
    // apply default if missing style prop else overrid
    const finalStyles = Object.assign({}, defaultProps, styles);

    console.log({ finalStyles });

    const styleList = createStyleList(finalStyles);

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
