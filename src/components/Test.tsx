import React from "react";
import { createComponent } from "../helpers/createComponent";
import { Common } from "../interfaces/common";

interface Props {
  color: string;
  // as?: keyof React.ReactHTML;
}

const Test: React.FC<Props> = ({ color, children }) => {
  return <div>{children}</div>;
};

type BoxProps = Common;

export const Random = createComponent<BoxProps>();

export default Test;
