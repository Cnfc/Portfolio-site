import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Root from "Root";
import App from "components/App/App";
import "components/index.css";
import Main from "./components/App/Main";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={Main} />
      <Route path="/path" component={App} />
    </BrowserRouter>
  </Root>,
  document.getElementById("root")
);
