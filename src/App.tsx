import React from "react";
import { Box } from "./components/Box";
import { Text } from "./components/Text";
import { Position } from "./components/Position";
import { BorderBox } from "./components/BorderBox";

const App: React.FC = () => {
  return (
    <div>
      <BorderBox
        size="100px"
        bg="white"
        borderRightWidth="20px"
        borderRightColor="black"
        borderRightStyle="solid"
        boxShadow="0 15px 27px 13px rgba(0, 0, 0, 0.03)"
      />
    </div>
  );
};

export default App;
