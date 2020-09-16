import React from "react";
import { Box } from "./components/Box";
import { Text } from "./components/Text";
import { Position } from "./components/Position";
import { BorderBox } from "./components/BorderBox";

const App: React.FC = () => {
  return (
    <div>
      <Box
        display="flex"
        bg="black"
        justifyContent="center"
        alignItems="flex-start"
        height="500px"
        flexWrap="wrap"
      >
        <Box bg="green" size="100px" flexGrow={2}>
          1
        </Box>
        <Box bg="orange" size="100px">
          2
        </Box>
        <Box bg="blue" size="100px">
          3
        </Box>
      </Box>
    </div>
  );
};

export default App;
