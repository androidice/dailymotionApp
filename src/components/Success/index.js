import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as dailyMotionActions from '../../actions/DailyMotionActions';
import * as appActions from '../../actions/AppActions';

class Success extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      loggedIn: false,
      access_token: this.props.access_token
    };
  }

  componentDidMount(){
    if(this.props.location && this.props.location.query && this.props.location.query.code){
      this.props.dailyMotionActions.getAccessToken(this.props.location.query.code);
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.access_token!==this.state.access_token) {
      this.setState({access_token: nextProps.access_token});
      this.props.appActions.setLoginState(true);
      browserHistory.replace('/dashboard');
    }
  }

  render(){
    return null;
  }
}

Success.propTypes = {
  location: PropTypes.object,
  dailyMotionActions: PropTypes.object,
  appActions:  PropTypes.object,
  access_token: PropTypes.string
};

function mapStateToProps(state, ownProps){
  return {
    access_token: state.access_token
  };
}

function mapDispatchToProps(dispatch){
  return {
    dailyMotionActions: bindActionCreators(dailyMotionActions, dispatch),
    appActions: bindActionCreators(appActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Success);
