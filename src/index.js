import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

import { DataLayer } from "./components/store/dataLayer";
import initialState from "./components/store/initialState";
import { reducer } from "./components/store/reducer";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
