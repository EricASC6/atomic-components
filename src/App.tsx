import React from "react";
import { Box } from "./components/Box";
import { Text } from "./components/Text";
import { Position } from "./components/Position";
import { BorderBox } from "./components/BorderBox";

const App: React.FC = () => {
  return (
    <div>
      <BorderBox size="100px" bg="blue" border="5px solid green" />
    </div>
  );
};

export default App;
