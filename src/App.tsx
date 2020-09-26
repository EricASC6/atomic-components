import React from "react";
import { Text } from "./components";
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
      <Text color="main">Hello</Text>

      <button onClick={handleClick}>Change theme</button>
    </div>
  );
};

export default App;
