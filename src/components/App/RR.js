import React, { useReducer } from "react";

const initialState = { cc: 15 };

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        cc: state.cc + 1
      };
    case "minus":
      return {
        cc: state.cc - 1
      };
    default:
      return state;
  }
}

function RR() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button onClick={() => dispatch({})}>=</button>
      <h1>{state.cc}</h1>
    </div>
  );
}

export default RR;
