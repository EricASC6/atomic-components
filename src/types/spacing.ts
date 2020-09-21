import { Properties } from "csstype";

export interface Spacing {
  padding: Properties["padding"];
  paddingTop: Properties["paddingTop"];
  paddingRight: Properties["paddingRight"];
  paddingBottom: Properties["paddingBottom"];
  paddingLeft: Properties["paddingLeft"];
  paddingX: Properties["padding"];
  paddingY: Properties["padding"];
  p: Properties["padding"];
  pt: Properties["paddingTop"];
  pr: Properties["paddingRight"];
  pb: Properties["paddingBottom"];
  pl: Properties["paddingLeft"];
  px: Properties["padding"];
  py: Properties["padding"];

  margin: Properties["margin"];
  marginTop: Properties["marginTop"];
  marginRight: Properties["marginRight"];
  marginBottom: Properties["marginBottom"];
  marginLeft: Properties["marginLeft"];
  marginX: Properties["margin"];
  marginY: Properties["margin"];
  m: Properties["margin"];
  mt: Properties["marginTop"];
  mr: Properties["marginRight"];
  mb: Properties["marginBottom"];
  ml: Properties["marginLeft"];
  mx: Properties["margin"];
  my: Properties["margin"];
}
