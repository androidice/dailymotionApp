import React, { PropTypes } from 'react';
import Modal from 'react-modal';
import Dailymotion from 'react-dailymotion';

let VideoModal = (props) =>{
  const {video, isOpen, contentLabel, closeModal, adjustVideoQuality, videoQuality } = props;
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      width                 : '750px',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel={contentLabel}
      style={customStyles}
    >
      <Dailymotion
        video={video.id}
        uiTheme="light"
        autoplay
        width="700px"
        uiShowLogo={false}
      />
      <h3>{video.title}</h3>
      <button onClick={closeModal}>close</button>
    </Modal>
  );
};

VideoModal.propTypes ={
  video: PropTypes.object.isRequired,
  videoQuality: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  adjustVideoQuality: PropTypes.func.isRequired,
  contentLabel: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default VideoModal;
