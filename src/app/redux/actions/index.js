import {
  SET_USER,
  SET_USER_ERROR,
  SET_USER_LOGGED_IN,
  LOADING_ON,
  LOADING_OFF,
  LOG_OUT,
} from "./../types";
import elearn from "./../../shared/utils/service";
import history from "./../../shared/utils/history";

export const logInReturningUser = () => async (dispatch) => {
  dispatch({ type: LOADING_ON });
  dispatch({
    type: SET_USER_LOGGED_IN,
    payload: {
      access_token: localStorage.getItem("access_token"),
      expires_in: 3600,
      token_type: "bearer",
      user: {},
    },
  });
  history.push("/home");
  dispatch({
    type: LOADING_OFF,
  });
};

export const logInUser = (username, password) => async (dispatch) => {
  toggleLoading(true);
  var obj = {
    username,
    password,
  };
  await elearn
    .post(`auth/login`, JSON.stringify(obj))
    .then((res) => {
      //there's cors issue
      //That's why it accepts as logged in no matter the password and email
      //Remove the access token from localstorage to log out
      history.push("/home");
      localStorage.setItem("access_token", "tokenisset");
      dispatch({
        type: SET_USER,
        payload: { data: {} },
      });
    })
    .catch((error) => {
      dispatch({
        type: SET_USER_ERROR,
        payload: {
          message:
            error.response && error.response.status === 401
              ? "İstifadəçi adı və ya şifrə yanlışdır"
              : "Xəta baş verdi. Daha sonra yenidən cəhd edin.",
        },
      });
    })
    .finally(() => {
      toggleLoading(false);
    });
};

export const loadingOn = () => ({ type: LOADING_ON });
export const loadingOff = () => ({ type: LOADING_OFF });
export const logOut = () => ({ type: LOG_OUT });
export const toggleLoading = (payload) => ({
  type: payload ? LOADING_ON : LOADING_OFF,
});
