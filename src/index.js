import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { GLOBAL_STYLES } from "./global-style";

ReactDOM.render(
  <>
    <GLOBAL_STYLES />
    <App />
  </>,
  document.getElementById("root")
);
