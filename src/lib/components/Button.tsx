import { createComponent } from "../createComponent";
import { ButtonProps } from "../types";

export const Button = createComponent<ButtonProps>({
  defaultHtml: "button",
  classNamePrefix: "BUTTON",
});
