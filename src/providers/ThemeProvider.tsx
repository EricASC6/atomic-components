import React, { createContext } from "react";
import { DEFAULT_THEME } from "../constants/theme";

interface Props {}

export const ThemeContext = createContext(DEFAULT_THEME);

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeContext.Provider value={DEFAULT_THEME}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
