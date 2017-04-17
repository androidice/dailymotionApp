import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function StatusReducer(state = initialState.loggedIn, action){
  switch(action.type){
    case types.LOGIN_STATE:
      return action.state;
    default:
      return state;
  }
}
