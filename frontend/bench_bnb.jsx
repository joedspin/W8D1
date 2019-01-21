import React from 'react';
import ReactDOM from 'react-dom';
import { signup, logout, login } from './util/session_api_util';
import configureStore from './store/store';

window.signup = signup;
window.login = login;
window.logout = logout;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});