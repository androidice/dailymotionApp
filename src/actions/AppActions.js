import * as types from './actionTypes';
import { logOut } from '../api/DailyMotionAPI';

export function setLoginStateAction(state){
  return {type: types.LOGIN_SUCCESS, state};
}

export function setLoginState(state){
  return function(dispatch){
    dispatch(setLoginStateAction(state));
  };
}

export function signOut(access_token){
  return function (dispatch){
    return logOut(access_token).then((response)=>{
      if(response.signOut){
        dispatch(setLoginState(false));
      }
    }).catch((error)=>{
      throw(error);
    });
  };
}
