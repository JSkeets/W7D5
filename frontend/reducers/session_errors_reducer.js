import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const initialState = [];

export const SessionErrorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      Object.assign(state,nextState,[action.errors]);
      return nextState;
    case RECEIVE_CURRENT_USER:
      Object.assign(state,nextState,[]);
      return nextState;
    default:
      return state;
  }
};
