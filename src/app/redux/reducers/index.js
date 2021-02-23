import {
  GET_USER,
  SET_USER,
  SET_USER_ERROR,
  LOG_OUT,
  SET_USER_LOGGED_IN,
  LOADING_OFF,
  LOADING_ON,
} from "./../types";

const initialUser = {
  isLoggedIn: localStorage.getItem("access_token") ? true : false,
  data: {},
  message: "",
  notify: true,
};

export function userReducer(userData = initialUser, action) {
  switch (action.type) {
    case GET_USER:
      return userData;
    case SET_USER_LOGGED_IN:
      return {
        data: action.payload,
        isLoggedIn: true,
        message: "",
        notify: !userData.notify,
      };
    case SET_USER:
      return {
        data: action.payload.data,
        isLoggedIn: true,
        message: "",
        notify: !userData.notify,
      };
    case SET_USER_ERROR:
      return {
        ...userData,
        message: action.payload.message,
        notify: !userData.notify,
      };
    case LOG_OUT:
      return {
        data: {},
        isLoggedIn: false,
        message: "Successfully logged out",
        notify: !userData.notify,
      };
    default:
      return userData;
  }
}

export function loaderReducer(isLoading = 0, action) {
  switch (action.type) {
    case LOADING_ON:
      return ++isLoading;
    case LOADING_OFF:
      return isLoading === 0 ? 0 : --isLoading;
    default:
      return isLoading;
  }
}
