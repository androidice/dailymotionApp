import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';

import Login from '../Login';

import * as authActions from '../../actions/AuthActions';

class Home extends React.Component {
  constructor(props, context){
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(info){
    this.props.actions.Authorize(info.username, info.password).then(()=>{
      browserHistory.push('/dashboard');
    },()=>{
      browserHistory.replace("/");
    });
  }

  render(){
    return (
      <Login onSubmit={this.handleSubmit}/>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {

  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
