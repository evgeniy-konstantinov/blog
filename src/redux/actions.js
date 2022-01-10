export const USER_SING_UP_DATA = 'USER_SING_UP_DATA';

export function userSingUpDataAction(userValue) {
  return {
    type: USER_SING_UP_DATA,

    email: userValue.email,
    password: userValue.password,
  };
}
