import React from "react";
import { animated } from "react-spring";
import { Link } from "react-router-dom";

const Nav = ({ style }) => {
  return (
    <animated.div className="nav-wrapper" style={style}>
      <nav>
        <Link to="/">Redux Auth</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/signin">SignIn</Link>
        <Link to="/signout">Sign Out</Link>
        <Link to="/feature">Feature</Link>
      </nav>
    </animated.div>
  );
};

export default Nav;
