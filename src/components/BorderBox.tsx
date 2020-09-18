import { createComponent } from "../helpers/createComponent";
import { Common, Spacing, Border, Flex, Layout } from "../types";

export type BorderBoxProps = Common & Spacing & Border & Flex & Layout;

export const BorderBox = createComponent<BorderBoxProps>();
