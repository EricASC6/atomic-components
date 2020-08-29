import { Properties } from "csstype";

export interface Typography {
  fontFamily?: Properties["fontFamily"];
  fontSize?: Properties["fontSize"];
  fontWeight?: Properties["fontWeight"];
  lineHeight?: Properties["lineHeight"];
  letterSpacing?: Properties["letterSpacing"];
  textAlign?: Properties["textAlign"];
}
