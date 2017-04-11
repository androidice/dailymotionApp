import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from '../Login';

import * as authActions from '../../actions/AuthActions';

class Home extends React.Component {
  constructor(props, context){
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(info){
    console.log('info', info);
    this.props.actions.Authorize(info.username, info.password);
  }

  render(){
    return (
      <Login onSubmit={this.handleSubmit}/>
    );
  }
}

function mapStateToProps(state, ownProps){
  debugger;
  return {

  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
