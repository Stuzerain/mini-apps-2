import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import EventBox from './eventbox.jsx';

const App = () => {

  const [events, setEvents] = useState([]);

  const testFetch = () => {
    axios.get('/events?_page=4&_limit=10')
      .then(results => {
        console.log(results);
        setEvents(results.data)
      })
  }

  let eventBoxes = events.map((event, index) =>
    <EventBox event={event} key={index} />
  )

  return (
    <div>
     <h1>Historical Event Finder</h1>

    <button onClick={() => testFetch()}>TEST</button>

    {eventBoxes}

    </div>
  )
}
 export default App;
