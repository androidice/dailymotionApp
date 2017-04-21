import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {signOut} from '../../actions/AppActions';

import {browserHistory } from 'react-router';
class LogOut extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  componentDidMount(){
    if(this.props.access_token){
      this.props.dispatch(signOut(this.props.access_token));
    }
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.isLoggedIn){
      browserHistory.replace('/');
    }
  }

  render(){
    return null;
  }
}

LogOut.propTypes = {
  access_token: PropTypes.string,
  dispatch: PropTypes.func
};

function mapStateToProps(state, ownProps){
  return {
    isLoggedIn: state.loggedIn,
    access_token: state.access_token
  };
}

export default connect(mapStateToProps)(LogOut);
