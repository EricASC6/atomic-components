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
  color: ColorTheme<React.CSSProperties["color"]>;
  display: React.CSSProperties["display"];
  opacity: React.CSSProperties["opacity"];
  backgroundColor: ColorTheme<React.CSSProperties["backgroundColor"]>;
  background: ColorTheme<React.CSSProperties["background"]>;
  bgColor: ColorTheme<React.CSSProperties["backgroundColor"]>;
  bg: ColorTheme<React.CSSProperties["background"]>;
}

export interface IFlexProps {
  justifyContent: React.CSSProperties["justifyContent"];
  alignItems: React.CSSProperties["alignItems"];
  alignContent: React.CSSProperties["alignContent"];
  alignSelf: React.CSSProperties["alignSelf"];
  flexDirection: React.CSSProperties["flexDirection"];
  flexWrap: React.CSSProperties["flexWrap"];
  flex: React.CSSProperties["flex"];
  flexGrow: React.CSSProperties["flexGrow"];
  flexBasis: React.CSSProperties["flexBasis"];
  flexShrink: React.CSSProperties["flexShrink"];
  order: React.CSSProperties["order"];
}

export interface IGridProps {
  gridTemplateColumns: React.CSSProperties["gridTemplateColumns"];
  gridTemplateRows: React.CSSProperties["gridTemplateRows"];
  gridColumnStart: React.CSSProperties["gridColumnStart"];
  gridColumnEnd: React.CSSProperties["gridColumnEnd"];
  gridRowStart: React.CSSProperties["gridRowStart"];
  gridRowEnd: React.CSSProperties["gridRowEnd"];
  gridColumn: React.CSSProperties["gridColumn"];
  gridRow: React.CSSProperties["gridRow"];
  columnGap: React.CSSProperties["columnGap"];
  rowGap: React.CSSProperties["rowGap"];
  gap: React.CSSProperties["gap"];
  gridAutoFlow: React.CSSProperties["gridAutoFlow"];
  gridAutoColumns: React.CSSProperties["gridAutoColumns"];
  gridAutoRows: React.CSSProperties["gridAutoRows"];
  gridTemplateAreas: React.CSSProperties["gridTemplateAreas"];
  gridArea: React.CSSProperties["gridArea"];
}

export interface ILayoutProps {
  width: React.CSSProperties["width"];
  height: React.CSSProperties["height"];
  size: React.CSSProperties["width"];
  minWidth: React.CSSProperties["minWidth"];
  minHeight: React.CSSProperties["minHeight"];
  maxWidth: React.CSSProperties["maxWidth"];
  maxHeight: React.CSSProperties["maxHeight"];
}

export interface IPositionProps {
  position: React.CSSProperties["position"];
  zIndex: React.CSSProperties["zIndex"];
  top: React.CSSProperties["top"];
  right: React.CSSProperties["right"];
  bottom: React.CSSProperties["bottom"];
  left: React.CSSProperties["left"];
}

export interface ISpacingProps {
  padding: SpacingTheme<React.CSSProperties["padding"]>;
  paddingTop: SpacingTheme<React.CSSProperties["paddingTop"]>;
  paddingRight: SpacingTheme<React.CSSProperties["paddingRight"]>;
  paddingBottom: SpacingTheme<React.CSSProperties["paddingBottom"]>;
  paddingLeft: SpacingTheme<React.CSSProperties["paddingLeft"]>;
  paddingX: SpacingTheme<React.CSSProperties["padding"]>;
  paddingY: SpacingTheme<React.CSSProperties["padding"]>;
  p: SpacingTheme<React.CSSProperties["padding"]>;
  pt: SpacingTheme<React.CSSProperties["paddingTop"]>;
  pr: SpacingTheme<React.CSSProperties["paddingRight"]>;
  pb: SpacingTheme<React.CSSProperties["paddingBottom"]>;
  pl: SpacingTheme<React.CSSProperties["paddingLeft"]>;
  px: SpacingTheme<React.CSSProperties["padding"]>;
  py: SpacingTheme<React.CSSProperties["padding"]>;

  margin: SpacingTheme<React.CSSProperties["margin"]>;
  marginTop: SpacingTheme<React.CSSProperties["marginTop"]>;
  marginRight: SpacingTheme<React.CSSProperties["marginRight"]>;
  marginBottom: SpacingTheme<React.CSSProperties["marginBottom"]>;
  marginLeft: SpacingTheme<React.CSSProperties["marginLeft"]>;
  marginX: SpacingTheme<React.CSSProperties["margin"]>;
  marginY: SpacingTheme<React.CSSProperties["margin"]>;
  m: SpacingTheme<React.CSSProperties["margin"]>;
  mt: SpacingTheme<React.CSSProperties["marginTop"]>;
  mr: SpacingTheme<React.CSSProperties["marginRight"]>;
  mb: SpacingTheme<React.CSSProperties["marginBottom"]>;
  ml: SpacingTheme<React.CSSProperties["marginLeft"]>;
  mx: SpacingTheme<React.CSSProperties["margin"]>;
  my: SpacingTheme<React.CSSProperties["margin"]>;
}

export interface ITypographyProps {
  fontFamily: React.CSSProperties["fontFamily"];
  fontSize: FontTheme<React.CSSProperties["fontSize"]>;
  fontWeight: React.CSSProperties["fontWeight"];
  lineHeight: React.CSSProperties["lineHeight"];
  letterSpacing: React.CSSProperties["letterSpacing"];
  textAlign: React.CSSProperties["textAlign"];
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
