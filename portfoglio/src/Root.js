import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import async from "middlewares/async";
import stateValidator from "middlewares/stateValidator";
import reducers from "reducers";

export default ({ children }) => {
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const store = createStore(
    reducers,
    { auth: { authenticated: localStorage.getItem("token") } },
    composeEnhancers(applyMiddleware(reduxThunk, async))
  );

  // stateValidator
  return <Provider store={store}>{children}</Provider>;
};
