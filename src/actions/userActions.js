import { GET_USER, GET_USERS, SET_ERRORS, SET_LOADING } from "./types";
import axios from "axios";

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.message
      });
    }
  };
};

export const getUserDetails = (id) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      dispatch({
        type: GET_USER,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.message
      });
    }
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
