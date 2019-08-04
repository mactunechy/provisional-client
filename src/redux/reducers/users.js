import {GET_SINGLE_USER, GET_USERS_LIST} from '../actions/users';

const initialState = {
  user: {
    firstName: 'Dellan',
    lastName: 'Muchengapadare',
    email: 'dellan@test.com',
    id: '1',
    subscription: 'free',
  },
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_USER:
      return {...state, user: action.payload};
    case GET_USERS_LIST:
      return {...state, users: action.payload};
    default:
      return state;
  }
};
