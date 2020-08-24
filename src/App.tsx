import React from "react";
import Test, { Random } from "./components/Test";

const App: React.FC = () => {
  return (
    <div>
      <Test color="#eee">Hello</Test>
      <Random color="#000">Hello</Random>
    </div>
  );
};

export default App;
