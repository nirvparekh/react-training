import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { app_store } from "./store/store";

ReactDOM.render(
  <Provider store={app_store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// create post
// list post
// delete post
// view single post
