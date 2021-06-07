import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/index";
import history from "./history";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import store from "./store";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { unregister } from "./registerServiceWorker.js";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
unregister();
