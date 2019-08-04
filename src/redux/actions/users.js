export const GET_USERS_LIST = 'GET_USERS_LIST';

export const GET_SINGLE_USER = 'GET_SINGLE_USER';

export const getSingleUser = payload => ({
  type: GET_SINGLE_USER,
  payload,
});

export const getUsersList = payload => ({
  type: GET_USERS_LIST,
  payload,
});
