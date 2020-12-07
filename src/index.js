import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import reportWebVitals from "./reportWebVitals";
import {updateUsername} from "./Redux/Reducers/Reducers";
const logger = createLogger();
const rootReducer = combineReducers({ updateUsername});
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
