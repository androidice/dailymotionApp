import React, { PropTypes } from 'react';
import Modal from 'react-modal';

let VideoModal = (props) =>{
  const {video, isOpen, contentLabel, closeModal } = props;
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
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
      <h1>Modal Content</h1>
      <button onClick={closeModal}>close</button>
    </Modal>
  );
};

VideoModal.propTypes ={
  video: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  contentLabel: PropTypes.string.isRequired
};

export default VideoModal;
