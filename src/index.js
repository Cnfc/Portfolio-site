import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Root from "Root";
import App from "components/App/App";
import Layout from "components/hoc/Layout";
import Welcome from "components/App/Welcome";
import SignUp from "components/auth/SignUp";

import "components/index.css";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Root>,
  document.getElementById("root")
);
