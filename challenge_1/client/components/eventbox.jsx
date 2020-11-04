import React from 'react';
import ReactDOM from 'react-dom';

const EventBox = ({event}) => {

  // some events in the database have a place specified in 'category2' and some don't -- this will show a header only for those that do
  let place = event.category2 ? <h4>Place: {event.category2}</h4> : '';

  return (
    // styling on this div is to help distinguish different events
    <div style={{border: '1px solid black'}}>
     <h4>Date: {event.date}</h4>
      {place}
      <p>{event.description}</p>
    </div>
  )
}
 export default EventBox;
