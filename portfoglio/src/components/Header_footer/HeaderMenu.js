import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class HeaderMenu extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <>
          <span className="header_name header_name_right">
            <Link to="/feature">Feature</Link>
          </span>
          <span className="header_name header_name_right">
            <Link to="/signout">Sign Out</Link>
          </span>
        </>
      );
    } else {
      return (
        <>
          <span className="header_name header_name_right">
            <Link to="/signin">SignIn</Link>
          </span>
          <span className="header_name header_name_right">
            <Link to="/signup">SignUp</Link>
          </span>
        </>
      );
    }
  }

  render() {
    return (
      <nav className="header_main-nav">
        <span className="header_name header_name_right">
          <Link to="/">Main</Link>
        </span>
        <span className="header_name header_name_right">
          <Link to="/portfoglio">Portfoglio</Link>
        </span>
        <span className="header_name header_name_right">
          <Link to="/resume">Resume</Link>
        </span>
        {this.renderLinks()}
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(HeaderMenu);
