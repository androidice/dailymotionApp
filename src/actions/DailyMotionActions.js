import * as dailyActionsApi from '../api/DailyMotionAPI';
import * as types from './actionTypes';

export function getAccessTokenSuccess(access_token){
   return {type: types.GET_ACCESS_TOKEN_SUCCESS, access_token};
}

export function getVideoListAction(videos){
  return {type: types.GET_VIDEO_LIST, videos};
}

export function getVideoAction(video){
  return {type: types.GET_VIDEO, video};
}



export function getAccessToken(auth_code) {
  return function(dispatch){
    return dailyActionsApi.getAccessToken(auth_code).then((response)=>{
      dispatch(getAccessTokenSuccess(response.access_token));
    }).catch((error)=>{ //catch any exception
      throw(error);
    });
  };
}

export function getVideos(access_token) {
  return function (dispatch) {
    return dailyActionsApi.getVideos(access_token).then((response)=>{
      dispatch(getVideoListAction(response.videos));
    }).catch((error)=>{
      throw(error);
    });
  };
}

export function getVideo(access_token, video_id){
  return function (dispatch){
    return dailyActionsApi.getVideo(access_token, video_id).then((response)=>{
      dispatch(getVideoAction(response.video));
    }).catch((error)=>{
      throw(error);
    });
  };
}
