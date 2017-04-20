import React from 'react';
import ReactRedirect from 'react-redirect';
import settings from '../../settings';

class Home extends React.Component {
  constructor(props, context){
    super(props, context);
    this.url = 'https://www.dailymotion.com/oauth/authorize?response_type=code&client_id=API_KEY&redirect_uri=REDIRECT_URL'.replace('API_KEY', settings.dailyMotion.API_KEY).replace('REDIRECT_URL', settings.dailyMotion.CALL_BACK_URL);
  }
  render(){
    return (
      <ReactRedirect location={this.url}>
      </ReactRedirect>
    )
  }
}



export default Home;
