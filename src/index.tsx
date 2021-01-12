import React from "react";
import ReactDOM from "react-dom";
import { Application } from "./application/Application";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./redux/store/Store";
import { Provider } from "react-redux";

const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
