import React from "react";
import { Text, Grid, BorderBox, Box, Button } from "./components";
import { useTheme } from "./hooks/theme";

const App: React.FC = () => {
  const { theme, changeTheme } = useTheme();

  console.log(theme);

  const handleClick = () => {
    if (theme.dark) {
      changeTheme({
        colors: {
          main: "#fff",
        },
        dark: false,
      });
    } else {
      changeTheme({
        colors: {
          main: "#000",
        },
        dark: true,
      });
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Text
        as="input"
        fontSize="base"
        onChange={(e) => {
          console.log((e.target as HTMLInputElement).value);
        }}
      />
    </div>
  );
};

export default App;
