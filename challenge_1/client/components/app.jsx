import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import EventBox from './eventbox.jsx';

const App = () => {

  const [keyword, setKeyword] = useState('')
  const [events, setEvents] = useState([]);

  const handleFormInputChange = (event) => {
    setKeyword(event.target.value);
  }

  const loadResults = () => {
    axios.get('/events?_page=1&_limit=10')
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

    <input type='text' value={keyword} onChange={(e) => {handleFormInputChange(event)}}></input>
    <button onClick={() => testFetch()}>Load results</button>

    {eventBoxes}

    </div>
  )
}
 export default App;
