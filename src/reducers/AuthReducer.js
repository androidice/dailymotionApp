import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function AuthReducer(state = initialState.authInfo, action){
   switch(action.type){
     case types.AUTHORIZE_SUCCESS:
        return Object.assign(state.loggedIn, true);
     default:
       return state;
   }
}
