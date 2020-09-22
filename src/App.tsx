import React from "react";
import { Grid, Box } from "./components";

const App: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <Box mt="10px" bg="grey" padding="100px" backgroundColor="blue900" />
      <Box padding="100px" mt="10px" bg="grey" />
      <Box bg="grey" padding="100px" mt="10px" />
    </div>
  );
};

export default App;
