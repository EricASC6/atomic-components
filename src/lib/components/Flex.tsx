import { createComponent } from "../createComponent";
import { FlexProps } from "../types";

export const Flex = createComponent<FlexProps>({
  classNamePrefix: "FLEX",
  defaultProps: {
    display: "flex",
  },
});
