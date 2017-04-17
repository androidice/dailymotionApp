import React, { Component, PropTypes } from 'react';
import sematable, { Table } from 'sematable';

const columns = [
  { key: 'id', primaryKey: true, header: 'ID', sortable: true },
  { key: 'firstName', header: 'First name', searchable: true, sortable: true }
];

class VideoList extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  render(){
    return (
      <Table
        {...this.props}
        columns={columns}
      />
    );
  }
}

VideoList.propTypes = {
  headers: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  primaryKey: PropTypes.string.isRequired
};

export default sematable('VideoList', VideoList, columns);
