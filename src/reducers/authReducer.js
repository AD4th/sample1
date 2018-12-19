import { Map } from 'immutable';

const loginStatus = Object.freeze({
  'FAIL': 1,
  'SUCCESS': 2,
  'DEFAULT': 3,
});

const initialState = Map({
  isFetching: false,
  signInStatus: loginStatus.DEFAULT,
});

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'START_FETCH':
      return state.set('isFetching', true);
    case 'END_FETCH':
      return state.set('isFetching', false);
    case 'SET_SIGN_IN_STATUS':
      return state.set('signInStatus', action.status);
    default:
      return initialState;
  }
};

export { loginStatus };
export default authReducer;
