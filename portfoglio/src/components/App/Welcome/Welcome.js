import React from "react";

import About from "./About/About";

import Logo from "./logo.svg";
import "./Welcome.css";

function Welcome() {
  return (
    <>
      <div className="header_welcome">
        <div className="header_circle" />
        <h1 className="header_welcome-name">Stanislav Dashkov</h1>
        <h2 className="gray">Frontend Web Developer</h2>
      </div>
      <About />
    </>
  );
}
export default Welcome;
