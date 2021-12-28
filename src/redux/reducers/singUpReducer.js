import {
  USER_EMAIL_SING_UP_DATA,
  USER_PASSWORD_SING_UP_DATA,
} from "../actions";

const initialState = {
  email: "",
  password: "",
};

export const singUpDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_EMAIL_SING_UP_DATA:
      return {
        ...state,
        email: action.email,
        // password,
      };
    case USER_PASSWORD_SING_UP_DATA:
      return {
        ...state,
        // email,
        password: action.password,
      };
    default:
      return state;
  }
};
