import React from "react";

type Properties = React.CSSProperties;

// Theme
type RequiredTheme = {
  colors: {
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;

    red100: string;
    red200: string;
    red300: string;
    red400: string;
    red500: string;
    red600: string;
    red700: string;
    red800: string;
    red900: string;

    orange100: string;
    orange200: string;
    orange300: string;
    orange400: string;
    orange500: string;
    orange600: string;
    orange700: string;
    orange800: string;
    orange900: string;

    yellow100: string;
    yellow200: string;
    yellow300: string;
    yellow400: string;
    yellow500: string;
    yellow600: string;
    yellow700: string;
    yellow800: string;
    yellow900: string;

    green100: string;
    green200: string;
    green300: string;
    green400: string;
    green500: string;
    green600: string;
    green700: string;
    green800: string;
    green900: string;

    teal100: string;
    teal200: string;
    teal300: string;
    teal400: string;
    teal500: string;
    teal600: string;
    teal700: string;
    teal800: string;
    teal900: string;

    blue100: string;
    blue200: string;
    blue300: string;
    blue400: string;
    blue500: string;
    blue600: string;
    blue700: string;
    blue800: string;
    blue900: string;

    indigo100: string;
    indigo200: string;
    indigo300: string;
    indigo400: string;
    indigo500: string;
    indigo600: string;
    indigo700: string;
    indigo800: string;
    indigo900: string;

    purple100: string;
    purple200: string;
    purple300: string;
    purple400: string;
    purple500: string;
    purple600: string;
    purple700: string;
    purple800: string;
    purple900: string;

    pink100: string;
    pink200: string;
    pink300: string;
    pink400: string;
    pink500: string;
    pink600: string;
    pink700: string;
    pink800: string;
    pink900: string;
  };

  spacing: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    8: string;
    10: string;
    12: string;
    16: string;
    20: string;
    24: string;
    32: string;
    40: string;
  };

  font: {
    xs: string;
    sm: string;
    base: string;
    h6: string;
    h5: string;
    h4: string;
    h3: string;
    h2: string;
    h1: string;
  };
};

export type Theme = {
  [K in keyof RequiredTheme]: RequiredTheme[K] & { [prop: string]: any };
} & { [prop: string]: any };

export type ThemeOptions = Partial<
  {
    [K in keyof Theme]: Partial<Theme[K]>;
  }
>;

export interface ThemeContextValue {
  theme: Theme;
  changeTheme: (theme: ThemeOptions) => void;
}

type ColorTheme<T> = keyof RequiredTheme["colors"] | (T & {});
type SpacingTheme<T> = keyof RequiredTheme["spacing"] | number | (T & {});
type FontTheme<T> = keyof RequiredTheme["font"] | number | (T & {});

// Style Props
export interface IBorderProps {
  border: React.CSSProperties["border"];
  borderWidth: React.CSSProperties["borderWidth"];
  borderStyle: React.CSSProperties["borderStyle"];
  borderColor: ColorTheme<React.CSSProperties["borderColor"]>;
  borderRadius: React.CSSProperties["borderRadius"];
  borderTop: React.CSSProperties["borderTop"];
  borderRight: React.CSSProperties["borderRight"];
  borderBottom: React.CSSProperties["borderBottom"];
  borderLeft: React.CSSProperties["borderLeft"];
  borderTopWidth: React.CSSProperties["borderTopWidth"];
  borderTopStyle: React.CSSProperties["borderTopColor"];
  borderTopColor: ColorTheme<React.CSSProperties["borderTopColor"]>;
  borderRightWidth: React.CSSProperties["borderRightWidth"];
  borderRightStyle: React.CSSProperties["borderRightStyle"];
  borderRightColor: ColorTheme<React.CSSProperties["borderRightColor"]>;
  borderBottomWidth: React.CSSProperties["borderBottomWidth"];
  borderBottomStyle: React.CSSProperties["borderBottomStyle"];
  borderBottomColor: ColorTheme<React.CSSProperties["borderBottomColor"]>;
  borderLeftWidth: React.CSSProperties["borderLeftWidth"];
  borderLeftStyle: React.CSSProperties["borderLeftStyle"];
  borderLeftColor: ColorTheme<React.CSSProperties["borderLeftColor"]>;
  borderX: React.CSSProperties["border"];
  borderY: React.CSSProperties["border"];

  borderTopLeftRadius: React.CSSProperties["borderTopLeftRadius"];
  borderTopRightRadius: React.CSSProperties["borderTopRightRadius"];
  borderBottomLeftRadius: React.CSSProperties["borderBottomLeftRadius"];
  borderBottomRightRadius: React.CSSProperties["borderBottomRightRadius"];

  boxShadow: React.CSSProperties["boxShadow"];
  textShadow: React.CSSProperties["textShadow"];
}

export interface ICommonProps {
  color: ColorTheme<Properties["color"]>;
  display: Properties["display"];
  opacity: Properties["opacity"];
  backgroundColor: ColorTheme<Properties["backgroundColor"]>;
  background: ColorTheme<Properties["background"]>;
  bgColor: ColorTheme<Properties["backgroundColor"]>;
  bg: ColorTheme<Properties["background"]>;
}

export interface IFlexProps {
  justifyContent: Properties["justifyContent"];
  alignItems: Properties["alignItems"];
  alignContent: Properties["alignContent"];
  alignSelf: Properties["alignSelf"];
  flexDirection: Properties["flexDirection"];
  flexWrap: Properties["flexWrap"];
  flex: Properties["flex"];
  flexGrow: Properties["flexGrow"];
  flexBasis: Properties["flexBasis"];
  flexShrink: Properties["flexShrink"];
  order: Properties["order"];
}

export interface IGridProps {
  gridTemplateColumns: Properties["gridTemplateColumns"];
  gridTemplateRows: Properties["gridTemplateRows"];
  gridColumnStart: Properties["gridColumnStart"];
  gridColumnEnd: Properties["gridColumnEnd"];
  gridRowStart: Properties["gridRowStart"];
  gridRowEnd: Properties["gridRowEnd"];
  gridColumn: Properties["gridColumn"];
  gridRow: Properties["gridRow"];
  columnGap: Properties["columnGap"];
  rowGap: Properties["rowGap"];
  gap: Properties["gap"];
  gridAutoFlow: Properties["gridAutoFlow"];
  gridAutoColumns: Properties["gridAutoColumns"];
  gridAutoRows: Properties["gridAutoRows"];
  gridTemplateAreas: Properties["gridTemplateAreas"];
  gridArea: Properties["gridArea"];
}

export interface ILayoutProps {
  width: Properties["width"];
  height: Properties["height"];
  size: Properties["width"];
  minWidth: Properties["minWidth"];
  minHeight: Properties["minHeight"];
  maxWidth: Properties["maxWidth"];
  maxHeight: Properties["maxHeight"];
}

export interface IPositionProps {
  position: Properties["position"];
  zIndex: Properties["zIndex"];
  top: Properties["top"];
  right: Properties["right"];
  bottom: Properties["bottom"];
  left: Properties["left"];
}

export interface ISpacingProps {
  padding: SpacingTheme<Properties["padding"]>;
  paddingTop: SpacingTheme<Properties["paddingTop"]>;
  paddingRight: SpacingTheme<Properties["paddingRight"]>;
  paddingBottom: SpacingTheme<Properties["paddingBottom"]>;
  paddingLeft: SpacingTheme<Properties["paddingLeft"]>;
  paddingX: SpacingTheme<Properties["padding"]>;
  paddingY: SpacingTheme<Properties["padding"]>;
  p: SpacingTheme<Properties["padding"]>;
  pt: SpacingTheme<Properties["paddingTop"]>;
  pr: SpacingTheme<Properties["paddingRight"]>;
  pb: SpacingTheme<Properties["paddingBottom"]>;
  pl: SpacingTheme<Properties["paddingLeft"]>;
  px: SpacingTheme<Properties["padding"]>;
  py: SpacingTheme<Properties["padding"]>;

  margin: SpacingTheme<Properties["margin"]>;
  marginTop: SpacingTheme<Properties["marginTop"]>;
  marginRight: SpacingTheme<Properties["marginRight"]>;
  marginBottom: SpacingTheme<Properties["marginBottom"]>;
  marginLeft: SpacingTheme<Properties["marginLeft"]>;
  marginX: SpacingTheme<Properties["margin"]>;
  marginY: SpacingTheme<Properties["margin"]>;
  m: SpacingTheme<Properties["margin"]>;
  mt: SpacingTheme<Properties["marginTop"]>;
  mr: SpacingTheme<Properties["marginRight"]>;
  mb: SpacingTheme<Properties["marginBottom"]>;
  ml: SpacingTheme<Properties["marginLeft"]>;
  mx: SpacingTheme<Properties["margin"]>;
  my: SpacingTheme<Properties["margin"]>;
}

export interface ITypographyProps {
  fontFamily: Properties["fontFamily"];
  fontSize: FontTheme<Properties["fontSize"]>;
  fontWeight: Properties["fontWeight"];
  lineHeight: Properties["lineHeight"];
  letterSpacing: Properties["letterSpacing"];
  textAlign: Properties["textAlign"];
}

export type AllStyleProps = IBorderProps &
  ICommonProps &
  IFlexProps &
  IGridProps &
  ILayoutProps &
  IPositionProps &
  ISpacingProps &
  ITypographyProps;

export type CSSRule = {
  [K in keyof AllStyleProps]?: AllStyleProps[K];
};

// Component Props
export type BorderBoxProps = ICommonProps & BoxProps;
export type BoxProps = ICommonProps &
  ISpacingProps &
  IFlexProps &
  IGridProps &
  ILayoutProps;
export type ButtonProps = ITypographyProps & BoxProps;
export type GridProps = ICommonProps & ILayoutProps & IGridProps;
export type InputProps = ICommonProps &
  IBorderProps &
  ILayoutProps &
  ITypographyProps &
  ISpacingProps;
export type PositionProps = IPositionProps & BoxProps;
export type TextProps = ICommonProps & ITypographyProps & ISpacingProps;

export type ComponentProps<T = {}> = React.HTMLProps<HTMLElement> &
  { [K in keyof T]?: T[K] } & {
    as?: keyof React.ReactHTML;
  };

// Component Types
export type BorderBox = React.FC<ComponentProps<BorderBoxProps>>;
export type Box = React.FC<ComponentProps<BoxProps>>;
export type Button = React.FC<ComponentProps<ButtonProps>>;
export type Grid = React.FC<ComponentProps<GridProps>>;
export type Input = React.FC<ComponentProps<InputProps>>;
export type Position = React.FC<ComponentProps<PositionProps>>;
export type Text = React.FC<ComponentProps<TextProps>>;
