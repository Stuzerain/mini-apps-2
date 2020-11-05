import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import EditView from './editview.jsx';

const EventBox = ({event}) => {

  const [editing, toggleEditing] = useState(false);

  // some events in the database have a place specified in 'category2' and some don't -- this will show a header only for those that do
  let place = event.category2 ? <h4>Place: {event.category2}</h4> : '';

  // render the EditView component only if 'editing' state is true
  let editView = editing ? <EditView event={event} /> : '';



  return (
    // styling on this div is to help distinguish different events
    <div style={{border: '1px solid black'}}>
     <h4>Date: {event.date}</h4>
      {place}
      <p>{event.description}</p>
      <button onClick={() => {toggleEditing(!editing)}}>EDIT</button>
      {editView}
    </div>
  )
}
 export default EventBox;
