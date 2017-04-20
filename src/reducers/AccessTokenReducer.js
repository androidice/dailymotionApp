import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function AccessTokenReducer(state = initialState.access_token, action){
  switch (action.type){
    case types.GET_ACCESS_TOKEN_SUCCESS:
      return action.access_token;
    default:
      return state;
  }
}
