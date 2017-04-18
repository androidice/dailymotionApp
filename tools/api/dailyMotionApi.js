import settings from '../../src/settings';

function getAccessToken(app){
  app.get('/getAccessToken', (req, res)=>{
    let OAuth2 = require('OAuth').OAuth2;
    let oauth2 = new OAuth2(settings.dailyMotion.API_KEY, settings.dailyMotion.API_SECRET, 'https://api.dailymotion.com/', null, 'oauth/token', null);
    oauth2.getOAuthAccessToken('', {
      'grant_type': 'authorization_code'
    }, function (e, access_token) {
      console.log('error', e);
      console.log('access_token', access_token);
      // if(!e){
      //   res.type('application/json');
      //   res.status(200).send({access_token: access_token});
      //   res.end();
      // }else{
      //   throw JSON.stringify(JSON.parse(e.data));
      // }
    });
  });
}

export default function exposeDailyMotionApi(app){
  getAccessToken(app);
}
