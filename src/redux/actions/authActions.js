import axios from "../config/axiosConfig"
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
} from "./types";

export const API_URL = import.meta.env.VITE_BASE_URL_FOR_FETCH;

export const login = (credenziali) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post(`${API_URL}/auth/login`, credenziali)
    .then((response) => {
      const user = response.data;
      localStorage.setItem("token", user.accessToken);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.response?.data?.message || error.message,
      });
    });
};

export const register = (userData) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  axios
    .post(`${API_URL}/auth/register`, userData)
    .then((response) => {
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({
        type: REGISTER_FAILURE,
        payload: error.response?.data?.message || error.message,
      });
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
};