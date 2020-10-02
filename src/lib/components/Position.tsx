import { createComponent } from "../createComponent";
import { PositionProps } from "../types";

export const Position = createComponent<PositionProps>({
  classNamePrefix: "POSITION",
  defaultProps: {
    position: "relative",
  },
});
