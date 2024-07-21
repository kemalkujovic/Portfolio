import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DropDownContextProvider } from "./context";

ReactDOM.render(
  <DropDownContextProvider>
    <App />
  </DropDownContextProvider>,
  document.getElementById("root")
);
