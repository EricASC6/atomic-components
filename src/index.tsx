import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./providers/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider
      theme={{
        colors: {
          main: "#fff",
        },
        dark: false,
      }}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
