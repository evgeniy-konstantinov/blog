export const USER_EMAIL_SING_UP_DATA = "USER_POST_SING_UP_DATA";
export const USER_PASSWORD_SING_UP_DATA = "USER_PASSWORD_SING_UP_DATA";

export function userEmailSingUpDataAction(email) {
  return {
    type: USER_EMAIL_SING_UP_DATA,
    email: email,
    // password,
  };
}

export function userPasswordSingUpDataAction(password) {
  return {
    type: USER_EMAIL_SING_UP_DATA,
    // email,
    password: password,
  };
}
