import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = user => {
  debugger
  return dispatch => {
    debugger
    return APIUtil.login(user).then(user => {
      debugger
      dispatch(receiveCurrentUser(user))
    })
    .fail(errors => {
      debugger
      dispatch(receiveErrors(errors))
    });
  };
};

export const logout = () => {
  return dispatch => {
    return APIUtil.logout().then(() => dispatch(logoutCurrentUser())
      .fail(errors => dispatch(receiveErrors(errors))));
  };
};

export const signup = user => {
  return dispatch => {
    return APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user))
      .fail(errors => dispatch(receiveErrors(errors))));
  };
};

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});