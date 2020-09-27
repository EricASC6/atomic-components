import { AllStyleProps } from "../types/style";
import { Theme } from "../types/theme";

type StyleConversion = {
  [K in keyof AllStyleProps]: {
    toCSS: string | string[];
    defaultUnit?: string;
    theme?: {
      name: keyof Theme;
    };
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
    theme: {
      name: "colors",
    },
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
    theme: {
      name: "colors",
    },
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
    theme: {
      name: "colors",
    },
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
    theme: {
      name: "colors",
    },
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
    theme: {
      name: "colors",
    },
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
    theme: {
      name: "colors",
    },
  },
  display: {
    toCSS: "display",
  },
  opacity: {
    toCSS: "opacity",
  },
  backgroundColor: {
    toCSS: "background-color",
    theme: {
      name: "colors",
    },
  },
  background: {
    toCSS: "background",
    theme: {
      name: "colors",
    },
  },
  bgColor: {
    toCSS: "background-color",
    theme: {
      name: "colors",
    },
  },
  bg: {
    toCSS: "background",
    theme: {
      name: "colors",
    },
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
  gridAutoFlow: {
    toCSS: "grid-auto-flow",
  },
  gridAutoColumns: {
    toCSS: "grid-auto-columns",
    defaultUnit: "px",
  },
  gridAutoRows: {
    toCSS: "grid-auto-rows",
    defaultUnit: "px",
  },
  gridTemplateAreas: {
    toCSS: "grid-template-areas",
  },
  gridArea: {
    toCSS: "grid-area",
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
    theme: {
      name: "spacing",
    },
  },
  paddingTop: {
    toCSS: "padding-top",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  paddingRight: {
    toCSS: "padding-right",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  paddingBottom: {
    toCSS: "padding-bottom",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  paddingLeft: {
    toCSS: "padding-left",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  paddingX: {
    toCSS: ["padding-right", "padding-left"],
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  paddingY: {
    toCSS: ["padding-top", "padding-bottom"],
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  p: {
    toCSS: "padding",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  pt: {
    toCSS: "padding-top",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  pr: {
    toCSS: "padding-right",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  pb: {
    toCSS: "padding-bottom",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  pl: {
    toCSS: "padding-left",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  px: {
    toCSS: ["padding-right", "padding-left"],
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  py: {
    toCSS: ["padding-top", "padding-bottom"],
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },

  margin: {
    toCSS: "margin",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  marginTop: {
    toCSS: "margin-top",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  marginRight: {
    toCSS: "margin-right",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  marginBottom: {
    toCSS: "margin-bottom",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  marginLeft: {
    toCSS: "margin-left",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  marginX: {
    toCSS: ["margin-right", "margin-left"],
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  marginY: {
    toCSS: ["margin-top", "margin-bottom"],
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  m: {
    toCSS: "margin",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  mt: {
    toCSS: "margin-top",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  mr: {
    toCSS: "margin-right",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  mb: {
    toCSS: "margin-bottom",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  ml: {
    toCSS: "margin-left",
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  mx: {
    toCSS: ["margin-right", "margin-left"],
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },
  my: {
    toCSS: ["margin-top", "margin-bottom"],
    defaultUnit: "px",
    theme: {
      name: "spacing",
    },
  },

  // typography
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
