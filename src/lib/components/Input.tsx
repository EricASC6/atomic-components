import { createComponent } from "../createComponent";
import { InputProps } from "../types";

export const Input = createComponent<InputProps>({
  defaultHtml: "input",
  classNamePrefix: "INPUT",
});
