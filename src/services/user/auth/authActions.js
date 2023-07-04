import * as AT from "./authTypes";
import axios from "axios";

const AUTH_URL = "http://localhost:8080/rest/user";

export const authenticateUser = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(AUTH_URL +"/authenticate", {
      email: email,
      password: password,
    });
    window.localStorage.setItem("Token", response.data.token);
    window.localStorage.setItem("stuloggedIn", true);
    window.localStorage.setItem("sturole", "student");
    window.localStorage.setItem("stuusername", response.data.name);
    dispatch(success({ stuusername: response.data.name, stuisLoggedIn: true }));
    return Promise.resolve(response.data);
  } catch (error) {
    dispatch(failure());
    return Promise.reject(error);
  }
};
export const logoutUser = () => {
  return (dispatch) => {
    dispatch(logoutRequest());
    localStorage.removeItem("Token");
    window.localStorage.removeItem("stuloggedIn");
    window.localStorage.removeItem("stuusername");
    window.localStorage.removeItem("sturole");
    dispatch(success({ stuusername: "", stuisLoggedIn: false }));
  };
};

const loginRequest = () => {
  return {
    type: AT.LOGIN_REQUEST,
  };
};

const logoutRequest = () => {
  return {
    type: AT.LOGOUT_REQUEST,
  };
};

const success = (isLoggedIn) => {
  return {
    type: AT.SUCCESS,
    payload: isLoggedIn,
  };
};

const failure = () => {
  return {
    type: AT.FAILURE,
    payload: false,
  };
};
