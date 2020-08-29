import { Properties } from "csstype";

export interface Style extends React.CSSProperties {
  bgColor?: Properties["backgroundColor"];
  bg?: Properties["background"];
}

export type StyleList = {
  [K in keyof Style]: any;
};
