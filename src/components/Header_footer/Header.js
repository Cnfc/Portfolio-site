import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import Checkout from "./Checkout";

const Header = () => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  const [isNavOpen, setNavOpen] = useState(false);

  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0,0) scale(1)`
      : `translate3d(100%, 0%, 0) scale(0.1) `
  });

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img className="logo" />
        <button className="menu-button" onClick={() => setNavOpen(!isNavOpen)}>
          Menu
        </button>
        <Nav style={navAnimation} />
      </header>
      <main>
        <Checkout isOpen={isNavOpen} />
      </main>
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

export default Header;
