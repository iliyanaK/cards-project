import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Tasks from "../src/components/Tasks";
import Cards from "../src/components/Cards";
import "normalize.css";
import "./index.css";

import configureStore from "./redux/store";

import App from "./components/App";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/cards/:id" component={Tasks} />
      <Route path="/cards/:id" component={Cards} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
