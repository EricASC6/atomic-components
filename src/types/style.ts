import { Border, Common, Flex, Layout, Spacing, Typography, Grid } from ".";

// This is where short hand style props are appended to pre-existing ones
export type Style = React.CSSProperties &
  Border &
  Common &
  Flex &
  Layout &
  Position &
  Spacing &
  Typography &
  Grid;

// list of styles that are available (used in style conversions)
export type StyleList = {
  [K in keyof Style]?: any;
};
