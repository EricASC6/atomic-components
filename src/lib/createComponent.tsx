import React from "react";
import { createStyleList } from "./helpers/styles";
import { CSSService } from "./css";
import { StyleStore } from "./styleStore";
import hash from "object-hash";
import { useTheme } from "./hooks/theme";
import { AllStyleProps } from "./types";
import { STYLE_CONVERSIONS } from "./constants/styleConversions";

interface CreateComponentArgs<T> {
  defaultHtml?: keyof React.ReactHTML;
  defaultProps?: Partial<T>;
  classNamePrefix?: string;
}

export type ComponentProps<T> = React.HTMLProps<HTMLElement> &
  Partial<T> & {
    as?: keyof React.ReactHTML;
  };

type StyleProps = Partial<AllStyleProps>;

export const createComponent = <T extends {}>({
  defaultHtml = "div",
  defaultProps = {},
  classNamePrefix,
}: CreateComponentArgs<T>) => {
  type Props = ComponentProps<T>;

  const Component: React.FC<Props> = ({
    children,
    as = defaultHtml,
    className: _className,
    ...props
  }) => {
    const { theme } = useTheme();

    // console.log({ theme });

    const [styles, htmlAttributes] = seperateStylePropsFromHTMLAttributes(
      props
    );

    // final styles with default styles applied
    // apply default if missing style prop else override
    const finalStyles = Object.assign({}, defaultProps, styles);

    // console.log({ finalStyles });

    const styleList = createStyleList(finalStyles);

    const cssRule = CSSService.createCSSRule(styleList, theme);
    const emptyCssRule = CSSService.isCSSRuleEmpty(cssRule);

    if (!emptyCssRule) {
      // console.log({ cssRule });

      // generate rule hash -> same rule objects should have the same hash
      const ruleHash = hash(cssRule);

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

      const finalClassName = className + (_className ? " " + _className : "");

      return React.createElement(
        as,
        { ...htmlAttributes, className: finalClassName },
        children
      );
    }

    return React.createElement(
      as,
      { ...htmlAttributes, className: _className },
      children
    );
  };

  return Component;
};

function seperateStylePropsFromHTMLAttributes(
  props: Object
): [StyleProps, React.AllHTMLAttributes<HTMLElement>] {
  let styleProps: any = {};
  let htmlAttributes: any = {};

  for (const [key, value] of Object.entries(props)) {
    if (isStyleProp(key)) styleProps[key] = value;
    else htmlAttributes[key] = value;
  }

  function isStyleProp(prop: string): boolean {
    return prop in STYLE_CONVERSIONS;
  }

  return [styleProps, htmlAttributes];
}
