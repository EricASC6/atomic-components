import { createComponent } from "../helpers/createComponent";
import { Typography } from "../types/typography";
import { Common } from "../types/common";
import { Spacing } from "../types/spacing";

type TextProps = Common & Typography & Spacing;

export const Text = createComponent<TextProps>({
  defaultHtml: "h2",
  classNamePrefix: "TEXT",
});
