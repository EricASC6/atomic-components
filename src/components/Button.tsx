import { createComponent } from "../helpers/createComponent";
import { Common, Spacing, Flex, Layout, Grid, Typography } from "../types";

export type ButtonProps = Common & Spacing & Flex & Layout & Grid & Typography;

export const Button = createComponent<ButtonProps>({
  defaultHtml: "button",
});
