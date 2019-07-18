import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "actions";

import CommentBox from "components/App/CommentBox";
import CommentList from "components/App/CommentList";

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>SignOut</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>SignIn</button>
      );
    }
  }

  renderHeader() {
    return (
      <ul className="page_container">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="post">Post A Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
        <h3>Welcome to our Application</h3>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
        <div>Some title</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(
  mapStateToProps,
  actions
)(App);
