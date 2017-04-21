import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoList from './components/VideoList';
import VideoModal from './components/VideoModal';
import * as dailyMotionActions from '../../actions/DailyMotionActions';
import { Link, browserHistory } from 'react-router';

class DashBoard extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      access_token: this.props.access_token,
      videos: this.props.videos,
      modalIsOpen: false,
      video: this.props.video,
      videoQuality: '240'
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleClickVideoTitle = this.handleClickVideoTitle.bind(this);
    this.handleAdjustVideoQuality = this.handleAdjustVideoQuality.bind(this);
  }

  componentDidMount(){
    if(this.props.access_token){
      this.props.actions.getVideos(this.props.access_token);
      browserHistory.replace('/dashboard');
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
    if(nextProps.video && nextProps.video.id){
      this.setState({video: Object.assign({}, nextProps.video)});
      this.handleOpenModal();
    }
  }

  handleOpenModal(){
    this.setState({modalIsOpen: true});
  }

  handleCloseModal(){
    this.setState({modalIsOpen: false});
  }

  handleClickVideoTitle(event){
    event.preventDefault();
    let videoId = event.target.id || '';
    this.props.actions.getVideo(this.state.access_token, videoId);
  }

  handleAdjustVideoQuality(selected){
    this.setState({videoQuality: selected.value});
  }

  render(){
    return (
      <div>
        <h2>DashBoard</h2>
        <Link to="/logout">Sign Out</Link>
        <VideoList data={this.state.videos}
                   onVideoTitleClick={this.handleClickVideoTitle}/>
        <VideoModal isOpen={this.state.modalIsOpen}
                    contentLabel="videoModal"
                    closeModal={this.handleCloseModal}
                    video={this.state.video}
                    videoQuality={this.state.videoQuality}
                    adjustVideoQuality={this.handleAdjustVideoQuality}
      />
      </div>
    );
  }
}

DashBoard.propTypes = {
  access_token: PropTypes.string,
  videos: PropTypes.array,
  video: PropTypes.object,
  actions: PropTypes.object,
  location: PropTypes.object
};

function mapStateToProps(state, ownProps){
  let video = {
    id: undefined,
    title: '',
    channel: '',
    owner: ''
  };

  return {
    access_token: state.access_token,
    videos: state.videos || [],
    video: state.video || video
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(dailyMotionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
