import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Router } from "react-router-dom";
import App from "./App";
import history from "./app/shared/utils/history";
import { Provider } from "react-redux";
import store from "./app/redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
