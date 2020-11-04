import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './search.jsx';
import EventBox from './eventbox.jsx';

const App = () => {
  // state that holds the results of a search
  const [events, setEvents] = useState([]);

  // this will render one EventBox component for each event that comes back from the search (up to a max of 10)
  let eventBoxes = events.map((event, index) =>
    <EventBox event={event} key={index} />
  )

  return (
    <div>
     <h1>Historical Event Finder</h1>

    <SearchBar setEvents={setEvents} />


    {eventBoxes}

    </div>
  )
}
 export default App;
