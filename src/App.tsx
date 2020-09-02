import React from "react";
import { Box } from "./components/Box";
import { Text } from "./components/Text";
import { Position } from "./components/Position";

const App: React.FC = () => {
  return (
    <div>
      <Box display="flex">
        <Text fontSize={100}>Yooooo</Text>
      </Box>
    </div>
  );
};

export default App;
