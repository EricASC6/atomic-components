import React from "react";
import { Box } from "./components/Box";
import { Text } from "./components/Text";

const App: React.FC = () => {
  return (
    <div>
      <Box display="flex">
        <Box p="50px" bg="pink" order={3}>
          1
        </Box>
        <Box p="50px" bg="pink" order={2}>
          2
        </Box>
        <Box p="50px" bg="pink" order={1}>
          3
        </Box>
      </Box>
    </div>
  );
};

export default App;
