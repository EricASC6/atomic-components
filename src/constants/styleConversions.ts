import { StyleList } from "../types/style";

type StyleConversion = StyleList;

export const STYLE_CONVERSIONS: StyleConversion = {
  color: "color",
  display: "display",
  opacity: "opacity",
  backgroundColor: "background-color",
  background: "background",
  bgColor: "background-color",
  bg: "background",

  fontFamily: "font-family",
  fontSize: "font-size",
  fontWeight: "font-weight",
  lineHeight: "line-height",
  letterSpacing: "letter-spacing",
  textAlign: "text-align",
};
