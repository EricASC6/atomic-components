import { createComponent } from "../createComponent";
import { TextProps } from "../types";

export const Text = createComponent<TextProps>({
  defaultHtml: "h2",
  classNamePrefix: "TEXT",
});
