import React from "react";
import ECSSRule from "../models/ecssRule";

export const createComponent = <
  T extends { [x: string]: number | string | undefined }
>(): React.FC<T> => {
  const Component: React.FC<T> = ({ children, ...props }) => {
    const styles = Object.entries(props)
      .filter(([_, value]) => Boolean(value))
      .map(([prop, value]) => {
        return new ECSSRule({ prop, value: value as string | number });
      });

    console.log(styles);

    return <div></div>;
  };

  return Component;
};
