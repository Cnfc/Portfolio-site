import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Root from "Root";
import App from "components/App/App";

import Layout from "components/hoc/Layout";
import Welcome from "components/App/Welcome/Welcome";
import SignUp from "components/auth/SignUp";
import Feature from "components/App/Feature";
import SignOut from "components/auth/SignOut";
import SignIn from "components/auth/SignIn";
import Portfoglio from "components/App/Portfoglio/Portfoglio";
import Resume from "components/App/Resume/Resume";

import "components/index.css";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/portfoglio" component={Portfoglio} />
          <Route path="/resume" component={Resume} />
          <Route path="/signup" component={SignUp} />
          <Route path="/feature" component={Feature} />
          <Route path="/signout" component={SignOut} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Root>,
  document.getElementById("root")
);
