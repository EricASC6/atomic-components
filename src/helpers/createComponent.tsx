import React from "react";
import { createStyleList } from "./styles";
import { CSSService } from "../services/css";
import { StyleStore } from "../services/styleStore";
import hash from "object-hash";
import { useTheme } from "../hooks/theme";

interface CreateComponentArgs<T> {
  defaultHtml?: keyof React.ReactHTML;
  defaultProps?: CreateComponentDefaultProps<T>;
  classNamePrefix?: string;
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
  classNamePrefix,
}: CreateComponentArgs<T> = {}) => {
  const Component: React.FC<ComponentProps<T>> = ({
    children,
    as = defaultHtml,
    ...props
  }) => {
    const theme = useTheme();

    // console.log({ theme });

    const styles = props;

    // final styles with default styles applied
    // apply default if missing style prop else override
    const finalStyles = Object.assign({}, defaultProps, styles);

    // console.log({ finalStyles });

    const styleList = createStyleList(finalStyles);

    const cssRule = CSSService.createCSSRule(styleList, theme);
    const emptyCssRule = CSSService.isCSSRuleEmpty(cssRule);

    if (!emptyCssRule) {
      console.log({ cssRule });

      // generate rule hash -> same rule objects should have the same hash
      const ruleHash = hash(cssRule);

      console.log({ hash: ruleHash });

      let className: string;
      const isExistingStyle = StyleStore.isExistingStyle(ruleHash);

      if (isExistingStyle) {
        // style exists -> grab classname and add to component
        className = StyleStore.getClassName(ruleHash)!;
      } else {
        // new style -> insert new css rule + generate new classname
        className = classNamePrefix
          ? StyleStore.generateClassName(classNamePrefix)
          : StyleStore.generateClassName();
        StyleStore.insertClassName(ruleHash, className);
        CSSService.insertCSSRuleByClassName(className, cssRule);
      }

      return React.createElement(as, { className }, children);
    }

    return React.createElement(as, {}, children);
  };

  return Component;
};
