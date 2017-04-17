import React from 'react';
import VideoList from './components/VideoList';

const users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    status: 'UNKNOWN',
    confirmed: true
  },
  {
    id: 2,
    firstName: 'Bob',
    lastName: 'McBobber',
    status: 'ACTIVE',
    confirmed: false
  },
  {
    id: 3,
    firstName: 'Foo',
    lastName: 'Bar',
    status: 'ACTIVE',
    confirmed: false
  },
  {
    id: 4,
    firstName: 'James',
    lastName: 'Bond',
    status: 'ACTIVE',
    confirmed: false
  },
  {
    id: 5,
    firstName: 'James',
    lastName: 'Test',
    status: 'DISABLED',
    confirmed: false
  },
  {
    id: 6,
    firstName: 'Bob',
    lastName: 'Skywalker',
    status: 'DISABLED',
    confirmed: false
  },
];

class DashBoard extends React.Component {

  render(){
    return (
      <div>
        <h2>DashBoard</h2>
        <VideoList data={users}/>
      </div>
    );
  }
}

export default DashBoard;
