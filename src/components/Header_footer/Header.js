import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header_title">
        <Link to="/">Redux Auth</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/signin">SignIn</Link>
        <Link to="/signout">Sign Out</Link>
        <Link to="/feature">Feature</Link>
      </div>
    );
  }
}

export default Header;
