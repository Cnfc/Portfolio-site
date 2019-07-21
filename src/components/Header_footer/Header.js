import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import Checkout from "./Checkout";
import HeaderMenu from "./HeaderMenu";

import "./HeaderStyle.css";

const Header = () => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  const [isNavOpen, setNavOpen] = useState(false);

  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0,0) scale(1)`
      : `translate3d(100%, 0%, 0) scale(0.1) `
  });

  return (
    <animated.header style={fade} className="header">
      <div className="header_name header_name-main">
        <Link to="/">Stanislav Dashkov</Link>
      </div>
      <Nav style={navAnimation} />
      <main>
        <Checkout isOpen={isNavOpen} />
      </main>
      <HeaderMenu />
      <button className="menu-button" onClick={() => setNavOpen(!isNavOpen)}>
        Menu
      </button>
    </animated.header>
  );
};

export default Header;
