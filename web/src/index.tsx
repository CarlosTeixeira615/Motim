import React from "react";
import ReactDOM from "react-dom";
import Home from "./Pages/Home";
import * as serviceWorker from "./serviceWorker";
import GlobalStyle from "./styles/global";
ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
