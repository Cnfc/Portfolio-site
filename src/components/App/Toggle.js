import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const Toggle = () => {
  const [items, setItems] = useState([
    {
      letter: "S",
      key: 1
    },
    {
      letter: "c",
      key: 2
    },
    {
      letter: "o",
      key: 3
    },
    {
      letter: "t",
      key: 4
    },
    {
      letter: "t",
      key: 5
    }
  ]);
  debugger;

  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  // ===================== JS =====================

  // ====================== JS ========================

  return (
    <div>
      {transition.map(({ item, key, props }) => (
        <animated.h1 key={key} style={props}>
          {item.letter}
        </animated.h1>
      ))}

      <button
        onClick={() =>
          setItems([
            {
              letter: "S",
              key: 1
            }
          ])
        }
      >
        Toggle
      </button>
    </div>
  );
};

export default Toggle;

// const transition = useTransition(toggle, null, {
//   from: { opacity: 0, position: "absolute" },
//   enter: { opacity: 1 },
//   leave: { opacity: 0 }
// });

// return (
//   <div
//     style={{
//       position: "relative"
//     }}
//   >
//     {transition.map(({ item, key, props }) =>
//       item ? (
//         <animated.h1 key={key} style={props}>
//           Hello
//         </animated.h1>
//       ) : (
//         <animated.h1 style={props}>World</animated.h1>
//       )
//     )}

//     <button onClick={() => setTogggle(!toggle)}>Toggle</button>
//   </div>
// );
// };