import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoList from './components/VideoList';
import VideoModal from './components/VideoModal';
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
    if(nextProps.access_token!==this.state.access_token) {
      this.props.actions.getVideos(nextProps.access_token);
      this.setState({access_token: nextProps.access_token});
    }
    if(nextProps.videos && nextProps.videos.length > 0){
      this.setState({videos: Object.assign([], nextProps.videos)});
    }
  }

  render(){
    return (
      <div>
        <h2>DashBoard</h2>
        <VideoList data={this.state.videos}/>
        <VideoModal/>
      </div>
    );
  }
}

DashBoard.propTypes = {
  access_token: PropTypes.string,
  videos: PropTypes.array,
  actions: PropTypes.object
};

function mapStateToProps(state, ownProps){
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
