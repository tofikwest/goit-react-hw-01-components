import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppProfile from "./App-profile";
import AppStat from "./App-stat";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppProfile />
    <AppStat />
  </React.StrictMode>,
  document.getElementById("root")
);
