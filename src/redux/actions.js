export const USER_SING_UP_DATA = 'USER_SING_UP_DATA';

export function userSingUpDataAction(email, password) {
  return {
    type: USER_SING_UP_DATA,
    email: email,
    password: password,
  };
}
