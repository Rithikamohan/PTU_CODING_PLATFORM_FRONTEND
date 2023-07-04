import * as AT from "./authTypes";
import axios from "axios";

const AUTH_URL = "http://localhost:8082/rest/faculty/authenticate";

export const authenticateUser = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(AUTH_URL, {
      email: email,
      password: password,
    });
    localStorage.setItem("Token", response.data.token);
        window.localStorage.setItem("facloggedIn", true);
        window.localStorage.setItem("facrole", "faculty");
    window.localStorage.setItem("facusername", response.data.name);
    dispatch(success({ facusername: response.data.name, facisLoggedIn: true }));
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
     window.localStorage.removeItem("facloggedIn");
    window.localStorage.removeItem("facusername");
     window.localStorage.removeItem("facrole");
    dispatch(success({ facusername: "", facisLoggedIn: false }));
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

const success = (facisLoggedIn) => {
  return {
    type: AT.SUCCESS,
    payload: facisLoggedIn,
  };
};

const failure = () => {
  return {
    type: AT.FAILURE,
    payload: false,
  };
};
