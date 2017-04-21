import settings from '../settings';
import request from 'superagent';

export function getAccessToken(auth_code) {
  return new Promise((resolve, reject) => {
    request
      .post(settings.host + '/getAccessToken')
      .send({ auth_code })
      .end((err, res) => {
        if (!err) {
          resolve(JSON.parse(res.text));
        } else {
          reject(err);
        }
      });
  });
}

export function getVideos(access_token) {
  return new Promise((resolve, reject) => {
    request
      .post(settings.host + '/getVideos')
      .send({ access_token })
      .end((err, res) => {
        if (!err) {
          resolve(JSON.parse(res.text));
        } else {
          reject(err);
        }
      });
  });
}

export function getVideo(access_token, video_id){
  return new Promise((resolve, reject)=>{
    request
      .post(settings.host + '/getVideo')
      .send({ access_token, video_id })
      .end((err, res) => {
        if (!err) {
          resolve(JSON.parse(res.text));
        } else {
          reject(err);
        }
      });
  });
}
