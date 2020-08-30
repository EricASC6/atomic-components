import { Common } from "../types/common";
import { Spacing } from "../types/spacing";
import { Flex } from "../types/flex";
import { createComponent } from "../helpers/createComponent";

export type BoxProps = Common & Spacing & Flex;

export const Box = createComponent<BoxProps>();
