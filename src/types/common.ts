import { Properties } from "csstype";
import { ColorTheme } from "./theme";

export interface Common {
  color: ColorTheme<Properties["color"]>;
  display: Properties["display"];
  opacity: Properties["opacity"];
  backgroundColor: ColorTheme<Properties["backgroundColor"]>;
  background: ColorTheme<Properties["background"]>;
  bgColor: ColorTheme<Properties["backgroundColor"]>;
  bg: ColorTheme<Properties["background"]>;
}
