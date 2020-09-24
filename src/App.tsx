import React from "react";
import { Grid, Box, Text } from "./components";

const App: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <Box mt="10px" bg="grey" padding="100px" backgroundColor="pink500" />
      <Box padding="100px" mt="10px" bg="grey" />
      <Box bg="grey" padding="100px" mt="10px" />
      <Text color="blue100">Hello</Text>
    </div>
  );
};

export default App;
