import { authTypes } from "../types";

const initialstate = {
  isLogged: false,
};

const sizeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case authTypes.LOGIN_USER:
      return {
        ...state,
        ...action.payload,
        isLoading: true,
        isLogged: true,

        error: undefined,
      };

    case authTypes.LOGOUT_USER:
      return initialstate;
    default:
      return state;
  }
};

export default sizeReducer;
