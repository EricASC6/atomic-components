import { createComponent } from "../helpers/createComponent";
import { Common, Spacing, Flex, Layout, Grid } from "../types";

export type BoxProps = Common & Spacing & Flex & Layout & Grid;

export const Box = createComponent<BoxProps>();
