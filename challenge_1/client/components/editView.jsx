import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import EditFormLine from './editFormLine.jsx';

const EditView = ({event}) => {

  // hold copy of the event in state so that whichever fields are edited can be sent in the update and unchanged fields will remain the same
  const [eventState, setEventState] = useState(event);

  // render one <EditFormLine> component per property of the event so that any property of the event can be updated
  let fields = Object.keys(event).map((property, index) =>
    <EditFormLine key={index} property={property} eventState={eventState} setEventState={setEventState} />
    );

  return (
    <div >
      <form>
        {fields}
      </form>
    </div>
  )
}
 export default EditView;
