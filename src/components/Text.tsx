import { createComponent } from "../helpers/createComponent";
import { Typography } from "../types/typography";
import { Common } from "../types/common";

type TextProps = Common & Typography;

export const Text = createComponent<TextProps>({
  defaultHtml: "h1",
});
