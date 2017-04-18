import React from 'react';
import { browserHistory } from 'react-router';

class Success extends React.Component {
  constructor(props, context){
    super(props, context);
    this.params = {};
  }

  componentDidMount(){
    if(this.props.location.search){
      let parts = this.props.location.search.substring(1).split('&');

      for (let i = 0; i < parts.length; i++) {
        let nv = parts[i].split('=');
        if (!nv[0]) continue;
        this.params[nv[0]] = nv[1] || true;
      }
    }
    localStorage.setItem('access_token', this.params.code);
    browserHistory.replace('/dashboard');
  }

  render(){
    return null;
  }
}

export default Success;
