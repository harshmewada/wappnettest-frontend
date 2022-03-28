import { authTypes } from "../types/index";

export const loginUser = (data) => {
  return {
    type: authTypes.LOGIN_USER,
    payload: data,
  };
};

export const logOutUser = (data) => {
  return {
    type: authTypes.LOGOUT_USER,
    payload: data,
  };
};
