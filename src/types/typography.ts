import { Properties } from "csstype";
import { FontTheme } from "./theme";

export interface Typography {
  fontFamily: Properties["fontFamily"];
  fontSize: FontTheme<Properties["fontSize"]>;
  fontWeight: Properties["fontWeight"];
  lineHeight: Properties["lineHeight"];
  letterSpacing: Properties["letterSpacing"];
  textAlign: Properties["textAlign"];
}
