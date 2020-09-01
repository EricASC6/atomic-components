import { Properties } from "csstype";

// This is where short hand style props are appended to pre-existing ones
export interface Style extends React.CSSProperties {
  bgColor?: Properties["backgroundColor"];
  bg?: Properties["background"];

  paddingX?: Properties["padding"];
  paddingY?: Properties["padding"];
  p?: Properties["padding"];
  pt?: Properties["paddingTop"];
  pr?: Properties["paddingRight"];
  pb?: Properties["paddingBottom"];
  pl?: Properties["paddingLeft"];
  px?: Properties["padding"];
  py?: Properties["padding"];

  marginX?: Properties["margin"];
  marginY?: Properties["margin"];
  m?: Properties["margin"];
  mt?: Properties["marginTop"];
  mr?: Properties["marginRight"];
  mb?: Properties["marginBottom"];
  ml?: Properties["marginLeft"];
  mx?: Properties["margin"];
  my?: Properties["margin"];

  size?: Properties["width"];
}

// list of styles that are available (used in style conversions)
export type StyleList = {
  [K in keyof Style]: any;
};
