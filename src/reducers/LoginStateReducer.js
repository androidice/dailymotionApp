import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function LoginStateReducer(state = initialState.loggedIn, action){
   switch(action.type){
     case types.LOGIN_SUCCESS:
        return action.state;
     default:
       return state;
   }
}
