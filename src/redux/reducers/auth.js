import {USER_LOGIN, USER_LOGOUT} from '../actions/auth';

const initialState = {
  isAuth: false,
  user: {
    firstName: 'tinashe',
    email: 'tina@test.com',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {...state, isAuth: true, user: action.payload};
    case USER_LOGOUT:
      return {...state, isAuth: false, user: null};
    default:
      return state;
  }
};
