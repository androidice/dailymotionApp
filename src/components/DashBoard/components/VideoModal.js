import React, { PropTypes } from 'react';
import Modal from 'react-modal';
import Dailymotion from 'react-dailymotion';

let VideoModal = (props) =>{
  const {video, isOpen, contentLabel, closeModal } = props;
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      width                 : '800px',
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
        width="600px"
      />
      <h3>{video.title}</h3>
      <button onClick={closeModal}>close</button>
    </Modal>
  );
};

VideoModal.propTypes ={
  video: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  contentLabel: PropTypes.string.isRequired
};

export default VideoModal;
