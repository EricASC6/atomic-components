import React from "react";
import { Text, Grid, BorderBox, Box, Button, Input } from "./components";
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
      <Input
        onChange={() => {
          console.log("on change");
        }}
      />
      <Text
        className="asdf"
        as="input"
        padding={100}
        onChange={(e) => {
          console.log((e.target as HTMLInputElement).value);
        }}
      />
    </div>
  );
};

export default App;
