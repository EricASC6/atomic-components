import React from "react";
import ReactDOM from "react-dom";
import { Box, ThemeProvider, Text } from "./lib";

const root = document.getElementById("root");

const App = () => {
  return (
    <div>
      <Box size={50} bg="yellow400" />
      <Text fontSize="base" color="blue700">
        hello
      </Text>
    </div>
  );
};

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  root
);
