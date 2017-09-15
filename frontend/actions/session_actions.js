export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

import { postUser, postSession, deleteSession } from '../util/session_api_util';


export const login = (user) => dispatch => (
  postSession(user).then(loggedInUser => {
    dispatch(receiveCurrentUser(loggedInUser));
  })
);

export const logout = () => dispatch => (
  deleteSession().then(resp => {
    dispatch(receiveCurrentUser(null));
  })
);

export const signup = (user) => dispatch => (
  postUser(user).then(loggedInUser => {
    dispatch(receiveCurrentUser(loggedInUser));
  })
);

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
