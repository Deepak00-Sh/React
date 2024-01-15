import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TipCalculator from "./tipCalculator";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TipCalculator />
  </React.StrictMode>
);
