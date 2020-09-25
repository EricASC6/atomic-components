import { createComponent } from "../helpers/createComponent";
import { Common, Layout, Grid as IGrid } from "../types";

export type GridProps = Common & Layout & IGrid;

export const Grid = createComponent<GridProps>({
  defaultProps: {
    display: "grid",
  },
  classNamePrefix: "GRID",
});
