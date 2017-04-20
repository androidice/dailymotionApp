import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function VideoReducer(state = initialState.video, action){
  switch (action.type){
    case types.GET_VIDEO:
      return Object.assign({}, action.video);
    default:
      return state;
  }
}
