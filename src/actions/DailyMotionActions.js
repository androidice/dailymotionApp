import * as dailyActionsApi from '../api/DailyMotionAPI';

export function getAccessToken(auth_code) {
  return function(dispatch){
    return dailyActionsApi.getAccessToken(auth_code).then((response)=>{
      console.log('access_token', response.access_token);
    });
  };
}
