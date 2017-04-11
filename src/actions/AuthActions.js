import * as authApi from '../api/AuthApi'
import * as types from './actionTypes';

export function AuthorizeSuccess(){
  return {type: types.AUTHORIZE_SUCCESS}
}

export function Authorize(username, password){
  return function (dispatch){
    return authApi.Authorize(username, password).then(()=>{
      dispatch(AuthorizeSuccess());
    },(error)=>{
      throw error;
    });
  }
}

