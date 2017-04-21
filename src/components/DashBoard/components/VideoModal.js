import React, { PropTypes } from 'react';
import Modal from 'react-modal';
import Dailymotion from 'react-dailymotion';
import Select from 'react-select';

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

  const options = [
    { value: '240', label: '240' },
    { value: '380', label: '380' },
    { value: '480', label: '480' },
    { value: '720', label: '720' },
    { value: '1080', label: '1080' },
    { value: '1440', label: '1440' },
    { value: '2160', label: '2160' }
  ];

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
        quality={videoQuality}
        uiShowLogo={false}
      />
      <h3>{video.title}</h3>
      <Select
      name="video-quality"
      value={videoQuality}
      options={options}
      onChange={adjustVideoQuality}
      />
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
