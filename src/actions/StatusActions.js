import * as types from './actionTypes';

export function BroadCastLoginState(state) {
  return { type: types.LOGIN_STATE, state };
}

export function checkLoginStatus() {
  return function (dispatch){
    let isLogin = localStorage.getItem('isLogin');
    console.log('isLogin', isLogin);
    if (isLogin) {
      dispatch(BroadCastLoginState(true));
    }else{
      dispatch(BroadCastLoginState(false));
    }
  };
}
