import React from "react";
import { Box } from "./components/Box";
import { Text } from "./components/Text";

const App: React.FC = () => {
  return (
    <div>
      <Box display="flex" p="10px" m="10px">
        <Text as="p" color="blue" lineHeight="150%" textAlign="center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          minus adipisci tempore amet quae in, aut culpa porro reprehenderit
          sint quam quas libero distinctio autem itaque eos quos impedit
          maiores!
        </Text>
      </Box>
    </div>
  );
};

export default App;
