import React from "react";
import { Random } from "./components/Test";

const App: React.FC = () => {
  return (
    <div>
      <Random color="yellow" display="inline">
        Hello
      </Random>
      <Random color="yellow" display="inline">
        Hello
      </Random>
    </div>
  );
};

export default App;
