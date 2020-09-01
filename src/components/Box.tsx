import { Common } from "../types/common";
import { Spacing } from "../types/spacing";
import { Flex } from "../types/flex";
import { Layout } from "../types/layout";
import { createComponent } from "../helpers/createComponent";

export type BoxProps = Common & Spacing & Flex & Layout;

export const Box = createComponent<BoxProps>();
