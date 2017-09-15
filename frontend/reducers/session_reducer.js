import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const initialState = {
  currentUser: {
    id: '',
    username: ''
  }
};

const sessionReducer = (state = initialState,action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      Object.assign(nextState,state,{currentUser: action.user});
      return nextState;
    default:
      return state;
  }
};

export default sessionReducer;
