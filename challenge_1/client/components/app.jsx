import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import EventBox from './eventbox.jsx';

const App = () => {

  // state that holds the keyword that will be used to search
  const [keyword, setKeyword] = useState('')
  // state that holds the results of a search
  const [events, setEvents] = useState([]);

  // function that keeps the 'keyword' state consistent with what is typed in the search box
  const handleFormInputChange = (event) => {
    setKeyword(event.target.value);
  }

  // function that queries the json-server using the 'keyword' state -- it specifies that the results come in pages of 10 at a time
  const loadResults = (search) => {
    axios.get(`/events?_page=1&_limit=10&q=${search}`)
      .then(results => {
        console.log(results);
        setEvents(results.data)
      })
  }

  // this will render one EventBox component for each event that comes back from the search (up to a max of 10)
  let eventBoxes = events.map((event, index) =>
    <EventBox event={event} key={index} />
  )

  return (
    <div>
     <h1>Historical Event Finder</h1>

    <input type='text' value={keyword} onChange={(e) => {handleFormInputChange(event)}}></input>
    <button onClick={() => loadResults(keyword)}>Load results</button>

    {eventBoxes}

    </div>
  )
}
 export default App;
