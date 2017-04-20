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
      videos: this.props.videos,
      modalIsOpen: false,
      video: this.props.video
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleClickVideoTitle = this.handleClickVideoTitle.bind(this);

    let auth_code = localStorage.getItem('auth_code');
    if(auth_code){
      this.props.actions.getAccessToken(auth_code);
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

  componentWillReceiveProps(nextProps){
    if(nextProps.access_token!==this.state.access_token) {
      console.log('access_token', nextProps.access_token);
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

  render(){
    debugger;
    return (
      <div>
        <h2>DashBoard</h2>
        <VideoList data={this.state.videos} onVideoTitleClick={this.handleClickVideoTitle}/>
        <VideoModal isOpen={this.state.modalIsOpen} contentLabel="videoModal" closeModal={this.handleCloseModal} video={this.state.video}/>
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
