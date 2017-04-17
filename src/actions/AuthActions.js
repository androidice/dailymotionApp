import * as authApi from '../api/AuthApi'
import * as types from './actionTypes';

export function AuthorizeSuccess(user) {
  return { type: types.AUTHORIZE_SUCCESS, user };
}

export function BroadCastLoginState(state) {
  return { type: types.LOGIN_STATE, state };
}

export function Authorize(username, password) {
  return function (dispatch) {
    return authApi.Authorize(username, password).then((user) => {
      localStorage.setItem('isLogin', true);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(AuthorizeSuccess(user));
      dispatch(BroadCastLoginState(true));
    }, (error) => {
      throw error;
    });
  }
}




