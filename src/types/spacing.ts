import { Properties } from "csstype";
import { SpacingTheme } from "./theme";

export interface Spacing {
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
