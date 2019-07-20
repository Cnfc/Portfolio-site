import axios from "axios";

import {
  SAVE_COMMENT,
  FETCH_COMMENTS,
  AUTH_USER,
  AUTH_ERROR
} from "actions/types";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments() {
  const res = axios.get("http://jsonplaceholder.typicode.com/comments");

  return {
    type: FETCH_COMMENTS,
    payload: res
  };
}

export const signup = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:3090/signup", formProps);

    dispatch({ type: AUTH_USER, payload: res.data.token });
    localStorage.setItem("token", "res.data.token");

    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email is use" });
    console.log(e);
  }
};
