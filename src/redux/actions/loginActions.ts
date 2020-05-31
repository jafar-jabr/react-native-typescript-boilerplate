import {
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REFRESH_TOKEN_ERROR,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
} from '../types/loginTypes';

const requestLogin = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

const requestLoginError = (payload) => ({
  type: LOGIN_ERROR,
  payload,
});

const requestLoginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

const refreshToken = (payload) => ({
  type: REFRESH_TOKEN_REQUEST,
  payload,
});

const refreshTokenError = (payload) => ({
  type: REFRESH_TOKEN_ERROR,
  payload,
});

const refreshTokenSuccess = (payload) => ({
  type: REFRESH_TOKEN_SUCCESS,
  payload,
});

const requestLogout = (payload) => ({
  type: LOGOUT_REQUEST,
  payload,
});

const requestLogoutError = (payload) => ({
  type: LOGOUT_ERROR,
  payload,
});

const requestLogoutSuccess = (payload) => ({
  type: LOGOUT_SUCCESS,
  payload,
});

const forgotPasswordRequest = (payload) => ({
  type: FORGOT_PASSWORD_REQUEST,
  payload,
});

const forgotPasswordError = (payload) => ({
  type: FORGOT_PASSWORD_ERROR,
  payload,
});

const forgotPasswordSuccess = (payload) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload,
});

const changePasswordRequest = (payload) => ({
  type: CHANGE_PASSWORD_REQUEST,
  payload,
});

const changePasswordError = (payload) => ({
  type: CHANGE_PASSWORD_ERROR,
  payload,
});

const changePasswordSuccess = (payload) => ({
  type: CHANGE_PASSWORD_SUCCESS,
  payload,
});

export {
  changePasswordRequest,
  changePasswordError,
  changePasswordSuccess,
  forgotPasswordRequest,
  forgotPasswordError,
  forgotPasswordSuccess,
  requestLogin,
  requestLoginError,
  requestLoginSuccess,
  refreshTokenError,
  refreshToken,
  refreshTokenSuccess,
  requestLogout,
  requestLogoutError,
  requestLogoutSuccess,
};
