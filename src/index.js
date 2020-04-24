import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./Redux/Store";
import TaskApp from "./task-app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TaskApp />
  </Provider>,
  rootElement
);
