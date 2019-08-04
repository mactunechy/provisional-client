export const USER_LOGIN = 'USER_LOGIN';

export const USER_LOGOUT = 'USER_LOGOUT';

export const userLogout = payload => ({
  type: USER_LOGOUT,
  payload,
});

export const userLogin = payload => ({
  type: USER_LOGIN,
  payload,
});
