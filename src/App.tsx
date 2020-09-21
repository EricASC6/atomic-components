import React from "react";
import { Grid, Box } from "./components";

const App: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <Grid gridTemplateColumns="1fr 1fr" gridTemplateRows="1fr 1fr">
        <Box minHeight="50px" bg="orange" />
        <Box bg="green" mx="5px" />
        <Box bg="red" />
        <Box bg="blue" />
      </Grid>
    </div>
  );
};

export default App;
