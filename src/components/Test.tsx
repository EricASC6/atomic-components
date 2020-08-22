import React from "react";
import ECSSRule from "../models/ecssRule";
import CSS from "../services/css";

interface Props {
  color: string;
  as?: keyof React.ReactHTML;
}

const Test: React.FC<Props> = ({ as, color, children }) => {
  const rule = new ECSSRule({ prop: "color", value: color });

  const css = CSS.getInstance();
  const className = "asdf";

  css.insertCSSRule(`.${className}`, rule);

  const html: keyof React.ReactHTML = as ? as : "div";

  return React.createElement(html, { className }, children);
};

export default Test;
