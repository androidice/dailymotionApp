import React from 'react';
import VideoList from './components/VideoList';

class DashBoard extends React.Component {

  render(){
    return (
      <div>
        <h2>DashBoard</h2>
        <VideoList data={[]}/>
      </div>
    );
  }
}

export default DashBoard;
