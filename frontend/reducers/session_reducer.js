import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, newState, {id: action.user.id});
    case LOGOUT_CURRENT_USER:
      newState[id] = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;