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

  padding: "padding",
  paddingTop: "padding-top",
  paddingRight: "padding-right",
  paddingBottom: "padding-bottom",
  paddingLeft: "padding-left",
  p: "padding",
  pt: "padding-top",
  pr: "padding-right",
  pb: "padding-bottom",
  pl: "padding-left",

  margin: "margin",
  marginTop: "margin-top",
  marginRight: "margin-right",
  marginBottom: "margin-bottom",
  marginLeft: "margin-left",
  m: "margin",
  mt: "margin-top",
  mr: "margin-right",
  mb: "margin-bottom",
  ml: "margin-left",

  justifyContent: "justify-content",
  alignItems: "align-items",
  alignContent: "align-content",
  alignSelf: "align-self",
  flexDirection: "flex-direction",
  flexWrap: "flex-wrap",
  flex: "flex",
  flexGrow: "flex-grow",
  flexBasis: "flex-basis",
  flexShrink: "flex-shrink",
  order: "order",

  width: "width",
  height: "height",
  minWidth: "min-width",
  minHeight: "min-height",
  maxWidth: "max-width",
  maxHeight: "max-height",

  position: "position",
  zIndex: "z-index",
  top: "top",
  right: "right",
  bottom: "bottom",
  left: "left",

  border: "border",
  borderWidth: "border-width",
  borderStyle: "border-style",
  borderColor: "border-color",
  borderRadius: "border-radius",
  borderTop: "border-top",
  borderRight: "border-right",
  borderBottom: "border-bottom",
  borderLeft: "border-left",

  borderTopWidth: "border-top-width",
  borderTopStyle: "border-top-style",
  borderTopColor: "border-top-color",
  borderRightWidth: "border-right-width",
  borderRightStyle: "border-right-style",
  borderRightColor: "border-right-color",
  borderBottomWidth: "border-bottom-width",
  borderBottomStyle: "border-bottom-style",
  borderBottomColor: "border-bottom-color",
  borderLeftWidth: "border-left-width",
  borderLeftStyle: "border-left-style",
  borderLeftColor: "border-left-color",

  borderTopLeftRadius: "border-top-left-radius",
  borderTopRightRadius: "border-top-right-radius",
  borderBottomLeftRadius: "border-bottom-left-radius",
  borderBottomRightRadius: "border-bottom-right-radius",

  boxShadow: "box-shadow",
  textShadow: "text-shadow",
};
