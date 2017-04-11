import * as types from '../actions/actionTypes';
export default function userReducer(state = {}, { type, payload }) {
  if (type === types.USER_LOGGED_IN) {
    return payload
  }
  if (type === types.USER_LOGGED_OUT) {
    return {}
  }
  return state
}
