import { USER_SING_UP_DATA } from '../actions';

const initialState = {
  email: '',
  password: '',
};

export const singUpDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SING_UP_DATA:
      return {
        ...state,
        email: action.email,
        password: action.password,
      };
    default:
      return state;
  }
};
