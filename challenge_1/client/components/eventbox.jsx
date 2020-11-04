import React from 'react';
import ReactDOM from 'react-dom';

const EventBox = ({event}) => {

  return (
    <div style={{border: '1px solid black'}}>
     <h4>Date: {event.date}</h4>
      <h4>Place: {event.category2}</h4>
      <p>{event.description}</p>
    </div>
  )
}
 export default EventBox;
