import { AllStyleProps } from "../types/style";

type StyleConversion = {
  [K in keyof AllStyleProps]: {
    toCSS: string | string[];
    defaultUnit?: string;
  };
};

export const STYLE_CONVERSIONS: StyleConversion = {
  // border
  border: {
    toCSS: "border",
  },
  borderWidth: {
    toCSS: "border-width",
    defaultUnit: "px",
  },
  borderStyle: {
    toCSS: "border-style",
  },
  borderColor: {
    toCSS: "border-color",
  },
  borderRadius: {
    toCSS: "border-radius",
  },
  borderTop: {
    toCSS: "border-top",
  },
  borderRight: {
    toCSS: "border-right",
  },
  borderBottom: {
    toCSS: "border-bottom",
  },
  borderLeft: {
    toCSS: "border-left",
  },
  borderTopWidth: {
    toCSS: "border-top-width",
    defaultUnit: "px",
  },
  borderTopStyle: {
    toCSS: "border-top-style",
  },
  borderTopColor: {
    toCSS: "border-top-color",
  },
  borderRightWidth: {
    toCSS: "border-right-width",
    defaultUnit: "px",
  },
  borderRightStyle: {
    toCSS: "border-right-style",
  },
  borderRightColor: {
    toCSS: "border-right-color",
  },
  borderBottomWidth: {
    toCSS: "border-bottom-width",
    defaultUnit: "px",
  },
  borderBottomStyle: {
    toCSS: "border-bottom-style",
  },
  borderBottomColor: {
    toCSS: "border-bottom-color",
  },
  borderLeftWidth: {
    toCSS: "border-left-width",
    defaultUnit: "px",
  },
  borderLeftStyle: {
    toCSS: "border-left-style",
  },
  borderLeftColor: {
    toCSS: "border-left-color",
  },
  borderX: {
    toCSS: ["border-right", "border-left"],
  },
  borderY: {
    toCSS: ["border-top", "border-bottom"],
  },

  borderTopLeftRadius: {
    toCSS: "border-top-left-radius",
  },
  borderTopRightRadius: {
    toCSS: "border-top-right-radius",
  },
  borderBottomLeftRadius: {
    toCSS: "border-bottom-left-radius",
  },
  borderBottomRightRadius: {
    toCSS: "border-bottom-right-radius",
  },
  boxShadow: { toCSS: "box-shadow" },
  textShadow: { toCSS: "text-shadow" },

  // common
  color: {
    toCSS: "color",
  },
  display: {
    toCSS: "display",
  },
  opacity: {
    toCSS: "opacity",
  },
  backgroundColor: {
    toCSS: "background-color",
  },
  background: {
    toCSS: "background",
  },
  bgColor: {
    toCSS: "background-color",
  },
  bg: {
    toCSS: "background",
  },
  // flex
  justifyContent: {
    toCSS: "justify-content",
  },
  alignItems: {
    toCSS: "align-items",
  },
  alignContent: {
    toCSS: "align-content",
  },
  alignSelf: {
    toCSS: "align-self",
  },
  flexDirection: {
    toCSS: "flex-direction",
  },
  flexWrap: {
    toCSS: "flex-wrap",
  },
  flex: {
    toCSS: "flex",
  },
  flexGrow: {
    toCSS: "flex-grow",
  },
  flexBasis: {
    toCSS: "flex-basis",
  },
  flexShrink: {
    toCSS: "flex-shrink",
  },
  order: {
    toCSS: "order",
  },
  // grid
  gridTemplateColumns: {
    toCSS: "grid-template-columns",
  },
  gridTemplateRows: {
    toCSS: "grid-template-rows",
  },
  gridColumnStart: {
    toCSS: "grid-column-start",
  },
  gridColumnEnd: {
    toCSS: "grid-column-end",
  },
  gridRowStart: {
    toCSS: "grid-row-start",
  },
  gridRowEnd: {
    toCSS: "grid-row-end",
  },
  gridColumn: {
    toCSS: "grid-column",
  },
  gridRow: {
    toCSS: "grid-row",
  },
  columnGap: {
    toCSS: "column-gap",
  },
  rowGap: {
    toCSS: "row-gap",
  },
  gap: {
    toCSS: "gap",
  },
  // layout
  width: {
    toCSS: "width",
    defaultUnit: "px",
  },
  height: {
    toCSS: "height",
    defaultUnit: "px",
  },
  size: {
    toCSS: ["height", "width"],
    defaultUnit: "px",
  },
  minWidth: {
    toCSS: "min-width",
    defaultUnit: "px",
  },
  minHeight: {
    toCSS: "min-height",
    defaultUnit: "px",
  },
  maxWidth: {
    toCSS: "max-width",
    defaultUnit: "px",
  },
  maxHeight: {
    toCSS: "max-height",
    defaultUnit: "px",
  },
  // position
  position: {
    toCSS: "position",
  },
  zIndex: {
    toCSS: "z-index",
  },
  top: {
    toCSS: "top",
    defaultUnit: "px",
  },
  right: {
    toCSS: "right",
    defaultUnit: "px",
  },
  bottom: {
    toCSS: "bottom",
    defaultUnit: "px",
  },
  left: {
    toCSS: "left",
    defaultUnit: "px",
  },
  // spacing
  padding: {
    toCSS: "padding",
    defaultUnit: "px",
  },
  paddingTop: {
    toCSS: "padding-top",
    defaultUnit: "px",
  },
  paddingRight: {
    toCSS: "padding-right",
    defaultUnit: "px",
  },
  paddingBottom: {
    toCSS: "padding-bottom",
    defaultUnit: "px",
  },
  paddingLeft: {
    toCSS: "padding-left",
    defaultUnit: "px",
  },
  paddingX: {
    toCSS: ["padding-right", "padding-left"],
    defaultUnit: "px",
  },
  paddingY: {
    toCSS: ["padding-top", "padding-bottom"],
    defaultUnit: "px",
  },
  p: {
    toCSS: "padding",
    defaultUnit: "px",
  },
  pt: {
    toCSS: "padding-top",
    defaultUnit: "px",
  },
  pr: {
    toCSS: "padding-right",
    defaultUnit: "px",
  },
  pb: {
    toCSS: "padding-bottom",
    defaultUnit: "px",
  },
  pl: {
    toCSS: "padding-left",
    defaultUnit: "px",
  },
  px: {
    toCSS: ["padding-right", "padding-left"],
    defaultUnit: "px",
  },
  py: {
    toCSS: ["padding-top", "padding-bottom"],
    defaultUnit: "px",
  },

  margin: {
    toCSS: "margin",
    defaultUnit: "px",
  },
  marginTop: {
    toCSS: "margin-top",
    defaultUnit: "px",
  },
  marginRight: {
    toCSS: "margin-right",
    defaultUnit: "px",
  },
  marginBottom: {
    toCSS: "margin-bottom",
    defaultUnit: "px",
  },
  marginLeft: {
    toCSS: "margin-left",
    defaultUnit: "px",
  },
  marginX: {
    toCSS: ["margin-right", "margin-left"],
    defaultUnit: "px",
  },
  marginY: {
    toCSS: ["margin-top", "margin-bottom"],
    defaultUnit: "px",
  },
  m: {
    toCSS: "margin",
    defaultUnit: "px",
  },
  mt: {
    toCSS: "margin-top",
    defaultUnit: "px",
  },
  mr: {
    toCSS: "margin-right",
    defaultUnit: "px",
  },
  mb: {
    toCSS: "margin-bottom",
    defaultUnit: "px",
  },
  ml: {
    toCSS: "margin-left",
    defaultUnit: "px",
  },
  mx: {
    toCSS: ["margin-right", "margin-left"],
    defaultUnit: "px",
  },
  my: {
    toCSS: ["margin-top", "margin-bottom"],
    defaultUnit: "px",
  },
  fontFamily: {
    toCSS: "font-family",
  },
  fontSize: {
    toCSS: "font-size",
    defaultUnit: "px",
  },
  fontWeight: {
    toCSS: "font-weight",
  },
  lineHeight: {
    toCSS: "line-height",
    defaultUnit: "px",
  },
  letterSpacing: {
    toCSS: "letter-spacing",
    defaultUnit: "px",
  },
  textAlign: {
    toCSS: "text-align",
  },
};
