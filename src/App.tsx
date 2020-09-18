import React from "react";
import { Grid, Box } from "./components";

const App: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <Grid gridTemplateColumns="1fr 1fr" gridTemplateRows="1fr 1fr">
        <Box minHeight="50px" bg="orange" gridRowStart="2" />
        <Box bg="green" gridColumnStart="2" gridRowEnd="span 2" />
      </Grid>
    </div>
  );
};

export default App;
