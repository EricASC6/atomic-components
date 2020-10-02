import { createComponent } from "../createComponent";
import { GridProps } from "../types";

export const Grid = createComponent<GridProps>({
  defaultProps: {
    display: "grid",
  },
  classNamePrefix: "GRID",
});
