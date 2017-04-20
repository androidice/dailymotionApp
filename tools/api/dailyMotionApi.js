import settings from '../../src/settings';
import request from 'request';

function getAccessToken(app){
  app.post('/getAccessToken', (req, res)=>{
    request.post({
      url: 'https://api.dailymotion.com/oauth/token',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      form:{
        redirect_uri: settings.dailyMotion.CALL_BACK_URL,
        grant_type: 'authorization_code',
        client_id: settings.dailyMotion.API_KEY,
        client_secret: settings.dailyMotion.API_SECRET,
        code: req.body.auth_code
      },
      json:true
    },(error, response, body)=>{
      if(!error){
        res.type('application/json');
        res.status(200).send({access_token: body.access_token});
        res.end();
      }
    });
  });
}

function getVideos(app){
  app.post('/getVideos',(req, res)=>{
    request({
      method: 'GET',
      url: 'https://api.dailymotion.com/videos',
      headers: {
        Authorization: 'Bearer ' + req.body.access_token
      }
    }, (error, response, body)=>{
      if(!error){
        let result = JSON.parse(body);
        res.type('application/json');
        res.status(200).send({videos: result.list});
        res.end();
      }
    });
  });
}

export default function exposeDailyMotionApi(app){
  getAccessToken(app);
  getVideos(app);
}
