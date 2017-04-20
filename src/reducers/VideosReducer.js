import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function VideoReducer(state = initialState.videos, action) {
  switch (action.type){
    case types.GET_VIDEO_LIST:
      return Object.assign([], action.videos);
    default:
      return state;
  }
}
