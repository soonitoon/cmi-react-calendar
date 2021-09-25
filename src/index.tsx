import React from "react";
import ReactDOM from "react-dom";
import store from "./reducer";
import { Provider } from "react-redux";
import { GlobalStyle } from "./global-styles";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
