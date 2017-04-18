import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoList from './components/VideoList';
import * as dailyMotionActions from '../../actions/DailyMotionActions';

class DashBoard extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  componentDidMount(){
    let auth_code = localStorage.getItem('auth_code');
    if(auth_code){
      debugger;
      this.props.actions.getAccessToken(auth_code);
    }
  }

  render(){
    return (
      <div>
        <h2>DashBoard</h2>
        <VideoList data={[]}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {

  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(dailyMotionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
