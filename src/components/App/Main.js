import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import logo from "./logo.svg";
import Toggle from "./Toggle";
import Nav from "./Nav";
import Checkout from "./Checkout";

import "./App.css";

const App2 = () => {
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
        <img src={logo} className="logo" />
        <button className="menu-button" onClick={() => setNavOpen(!isNavOpen)}>
          Menu
        </button>
        {/* <Nav style={navAnimation} /> */}
      </header>
      <main>
        <Toggle />
        <Checkout isOpen={isNavOpen} />
      </main>
    </animated.div>
  );
};

export default App2;

// const navAnimation = useSpring({
//   transform: isNavOpen
//     ? `translate3d(0, 0,0) scale(1)`
//     : `translate3d(100%, -100%, 0) scale(0.1) `
// });
