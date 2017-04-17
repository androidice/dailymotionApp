import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as statusActions from '../../actions/StatusActions';

class AuthHandler extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {};
  }

  componentDidMount(){
    if(!this.props.isLoggedIn){
      browserHistory.replace("/");
    }
  }

  render(){
    if(this.props.isLoggedIn){
      return this.props.children;
    } else {
      return null;
    }
  }
}

AuthHandler.propTypes ={
  isLoggedIn: PropTypes.bool.isRequired,
  currentURL: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  debugger;
  return {
    isLoggedIn: true,
    currentURL: ownProps.location.pathname
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(statusActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthHandler);
