import { GET_USER, GET_USERS, SET_ERRORS, SET_LOADING } from "../actions/types";

const initialState = {
  users: null,
  loading: false,
  user: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };

    case SET_ERRORS:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
