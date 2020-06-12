import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import counterreducer from "./Components/reducer/reducer";
import personreducer from "./Components/reducer/personreducer";
import auth from "./Components/reducer/Auth";
import * as serviceWorker from "./serviceWorker";

const rootReducer = combineReducers({
  ctr: counterreducer,
  prs: personreducer,
  auth: auth,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
