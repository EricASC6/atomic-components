import { Common } from "../types/common";
import { Spacing } from "../types/spacing";
import { createComponent } from "../helpers/createComponent";

export type BoxProps = Common & Spacing;

export const Box = createComponent<BoxProps>();
