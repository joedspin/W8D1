import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, newState, action.errors);
    case RECEIVE_CURRENT_USER:
      newState = [];
      return newState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;