import * as actionTypes from "./actionTypes";
import axios from "axios";

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  return {
    type: actionTypes.Logout,
  };
};

const authSuccess = (token, username) => {
  return {
    type: actionTypes.Login,
    token: token,
    username: username,
  };
};

export const auth = (username, password) => {
  const data = {
    username: username,
    password: password,
  };
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/v1/login/", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        dispatch(authSuccess(res.data.token, res.data.username));
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
};

export const checkAuth = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (!(token && username)) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token, username));
    }
  };
};
