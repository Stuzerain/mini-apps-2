import React from 'react';
import ReactDOM from 'react-dom';

const EventBox = ({event}) => {

  let place = event.category2 ? <h4>Place: {event.category2}</h4> : '';

  return (
    <div style={{border: '1px solid black'}}>
     <h4>Date: {event.date}</h4>
      {place}
      <p>{event.description}</p>
    </div>
  )
}
 export default EventBox;
