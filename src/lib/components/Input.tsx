import { createComponent } from "../helpers/createComponent";
import { Common, Border, Layout, Typography, Spacing } from "../types";

export type InputProps = Common & Border & Layout & Typography & Spacing;

export const Input = createComponent<InputProps>({
  defaultHtml: "input",
});
