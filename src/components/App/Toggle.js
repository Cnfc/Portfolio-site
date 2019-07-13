import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Toggle = () => {
  const [toggle, setTogggle] = useState(false);
  const { color, y } = useSpring({
    // opacity: toggle ? 1 : 0,
    // fontSize: toggle ? "5rem" : "1rem",
    color: toggle ? "tomato" : "green",
    y: toggle ? -500 : 0
  });

  return (
    <div className="" onClick={() => setTogggle(!toggle)}>
      <animated.h1
        style={{
          transform: y.interpolate(y => `translate3d(${y}px ,0, 0)`),
          color
        }}
      >
        Hello
      </animated.h1>
    </div>
  );
};

export default Toggle;
