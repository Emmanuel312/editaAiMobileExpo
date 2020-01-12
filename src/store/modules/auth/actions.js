import { SIGN_IN_REQUEST, SIGN_IN_FAILURE, SIGN_IN_SUCCESS } from '../types';

export function signInRequest(email, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: {
      email,
      password,
    },
  };
}

export function signInSuccess(user, token) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      user,
      token,
    },
  };
}

export function signInFailure() {
  return {
    type: SIGN_IN_FAILURE,
  };
}
