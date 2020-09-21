import React from "react";
import { createStyleList } from "./styles";
import { CSSService } from "../services/css";

interface CreateComponentArgs<T> {
  defaultHtml?: keyof React.ReactHTML;
  defaultProps?: CreateComponentDefaultProps<T>;
}

type CreateComponentDefaultProps<T = {}> = {
  [K in keyof T]?: T[K];
};

type ComponentProps<T> = { [K in keyof T]?: T[K] } & {
  as?: keyof React.ReactHTML;
};

export const createComponent = <T extends {}>({
  defaultHtml = "div",
  defaultProps = {},
}: CreateComponentArgs<T> = {}) => {
  const Component: React.FC<ComponentProps<T>> = ({
    children,
    as = defaultHtml,
    ...props
  }) => {
    const styles = props;

    console.log({ styles });

    // final styles with default styles applied
    // apply default if missing style prop else override
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
