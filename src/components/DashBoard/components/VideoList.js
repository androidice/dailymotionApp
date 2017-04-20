import React, { PropTypes } from 'react';
import sematable, { SortableHeader } from 'sematable';

const columns = [
  { key: 'id',  header: 'ID', searchable: true, sortable: true, primaryKey: true },
  { key: 'title', header: 'Title', searchable: true, sortable: true },
  { key: 'channel', header: 'Channel', searchable: true, sortable: true },
  { key: 'owner', header: 'Owner', searchable: true, sortable: true }
];

class VideoList extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  render(){
    debugger;
    const {
      headers: {id, title, channel, owner},
      data } = this.props;
    return (
     <div className="table-responsive">
       <table className="table table-sm table-striped table-hover">
          <thead>
            <tr>
              <SortableHeader {...id} />
              <SortableHeader {...title} />
              <SortableHeader {...channel} />
              <SortableHeader {...owner} />
            </tr>
          </thead>
         <tbody>
         {data.map((app)=>(
           <tr key={app.id}>
              <td>{app.id}</td>
              <td><a href="javascript.void()">{app.title}</a></td>
              <td>{app.channel}</td>
              <td>{app.owner}</td>
           </tr>
         ))}
         </tbody>
       </table>
     </div>
    );
  }
}

VideoList.propTypes = {
  headers: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  primaryKey: PropTypes.string.isRequired
};

export default sematable('VideoList', VideoList, columns);
