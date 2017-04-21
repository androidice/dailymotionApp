import * as types from './actionTypes';

export function setLoginStateAction(state){
  return {type: types.LOGIN_SUCCESS, state};
}

export function setLoginState(state){
  return function(dispatch){
    dispatch(setLoginStateAction(state));
  };
}
