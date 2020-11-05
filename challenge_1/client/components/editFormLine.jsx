import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const EditFormLine = ({property, eventState, setEventState}) => {

  // upon editing an input, update that property of editView's state
  const handleFormChange = (event, prop) => {
    setEventState({...eventState, [prop]: event.target.value})
  }

  return (
    <div>
    <label>
      {property}
      <input type='text' id={property} value={eventState.property} onChange={(event) => {handleFormChange(event, property)}}></input>
    </label>
  </div>
  )
}
 export default EditFormLine;
