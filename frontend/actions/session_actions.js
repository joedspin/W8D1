import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = user => {
  return dispatch => {
    APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user))
    .fail(errors => dispatch(receiveErrors(errors))));
  };
};

export const logout = () => {
  return dispatch => {
    APIUtil.logout().then(() => dispatch(logoutCurrentUser())
      .fail(errors => dispatch(receiveErrors(errors))));
  };
};

export const signup = user => {
  return dispatch => {
    APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user))
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