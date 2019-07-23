import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../actions";

class SignOut extends Component {
  componentDidMount() {
    this.props.signOut();
  }
  render() {
    return (
      <div>
        <h4>Sorry to see you go</h4>
      </div>
    );
  }
}

export default connect(
  null,
  action
)(SignOut);
