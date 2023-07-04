import * as AT from "./authTypes";
import axios from "axios";

const AUTH_URL = "http://localhost:8083/rest/admin/authenticate";
export const authenticateUser = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(AUTH_URL, {
      email: email,
      password: password,
    });
    localStorage.setItem("jwtToken", response.data.token);
        window.localStorage.setItem("adminloggedIn", true);
        window.localStorage.setItem("adminrole", "admin");
    window.localStorage.setItem("adminusername", response.data.name);
    dispatch(success({ username: response.data.name, adminisLoggedIn: true }));
    return Promise.resolve(response.data);
  } catch (error) {
    dispatch(failure());
    return Promise.reject(error);
  }
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(logoutRequest());
    localStorage.removeItem("jwtToken");
     window.localStorage.removeItem("adminloggedIn");
    window.localStorage.removeItem("adminusername");
    window.localStorage.removeItem("adminrole");
    dispatch(success({ adminusername: "", adminisLoggedIn: false }));
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

const success = (adminisLoggedIn) => {
  return {
    type: AT.SUCCESS,
    payload: adminisLoggedIn,
  };
};

const failure = () => {
  return {
    type: AT.FAILURE,
    payload: false,
  };
};
