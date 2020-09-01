import React from "react";
import { Box } from "./components/Box";
import { Text } from "./components/Text";

const App: React.FC = () => {
  return (
    <div>
      <Box display="flex">
        <Box bg="pink" width="125px" height="125px" maxHeight="100px">
          1
        </Box>
        <Box bg="pink">2</Box>
        <Box bg="pink">3</Box>
      </Box>
    </div>
  );
};

export default App;
