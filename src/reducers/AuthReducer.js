import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function AuthReducer(state = initialState.user, action){
   switch(action.type){
     case types.AUTHORIZE_SUCCESS:
        return action.user;
     default:
       return state;
   }
}
