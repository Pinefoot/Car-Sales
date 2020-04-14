import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "";
import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(CarsReducers);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
