import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoList from './components/VideoList';
import * as dailyMotionActions from '../../actions/DailyMotionActions';

class DashBoard extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      access_token: this.props.access_token,
      videos: this.props.videos
    };
    let auth_code = localStorage.getItem('auth_code');
    if(auth_code){
      this.props.actions.getAccessToken(auth_code);
    }
  }


  componentWillReceiveProps(nextProps){
    debugger;
    if(nextProps.access_token!==this.state.access_token) {
      this.props.actions.getVideos(nextProps.access_token);
      this.setState({access_token: nextProps.access_token});
    }
    if(nextProps.videos && nextProps.videos.length > 0){
      this.setState({videos: Object.assign([], nextProps.videos)});
    }
  }

  render(){
    debugger;
    return (
      <div>
        <h2>DashBoard</h2>
        <VideoList data={this.state.videos}/>
      </div>
    );
  }
}


DashBoard.propTypes = {
  access_token: PropTypes.string,
  actions: PropTypes.object
};

function mapStateToProps(state, ownProps){
  debugger;
  console.log('state', state);
  return {
    access_token: state.access_token,
    videos: state.videos || []
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(dailyMotionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
