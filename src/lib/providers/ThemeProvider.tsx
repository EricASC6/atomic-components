import React, { createContext, useState } from "react";
import { Theme } from "../types/theme";
import { DEFAULT_THEME } from "../constants/theme";

export type ThemeValue = {
  [K in keyof Theme]: Theme[K] & { [prop: string]: any };
} & { [prop: string]: any };

export type ThemeOptions = {
  [K in keyof Theme]?: {
    [T in keyof Theme[K]]?: string;
  } & { [prop: string]: any };
} & { [prop: string]: any };

export interface ThemeContextValue {
  theme: ThemeValue;
  changeTheme: (theme: ThemeOptions) => any;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  changeTheme: () => {
    return;
  },
});

interface Props {
  theme?: ThemeOptions;
}

export const ThemeProvider: React.FC<Props> = ({
  children,
  theme: themeArg,
}) => {
  const themeValue = themeArg
    ? deepMerge(DEFAULT_THEME, themeArg)
    : DEFAULT_THEME;

  const [theme, setTheme] = useState(themeValue);

  console.log(theme);

  const changeTheme = (theme: ThemeOptions) => {
    setTheme((prevTheme) => deepMerge(prevTheme, theme));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function deepMerge<T, K>(src: T, other: K): T & K {
  // so we don't modify src -> src copy
  let result: any = { ...src };

  for (const key in other) {
    const val = other[key];
    const isPrimitive = typeof val !== "object";

    if (isPrimitive) {
      result[key] = val;
    } else {
      const keyExistsOnSrc = result.hasOwnProperty(key);

      if (keyExistsOnSrc) {
        result[key] = deepMerge(result[key], val);
      } else {
        result[key] = val;
      }
    }
  }

  return result;
}

export default ThemeProvider;
