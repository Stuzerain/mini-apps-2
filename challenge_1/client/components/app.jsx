import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchBar from './search.jsx';
import Events from './events.jsx';

const App = () => {

  // state that holds the keyword that will be used to search
  const [keyword, setKeyword] = useState('')
  // state that holds the results of a search
  const [events, setEvents] = useState([]);
  // state that will hold the total number of pages to pass along to the pagination
  const [pages, setPages] = useState(0);

  // function that queries the json-server using the 'keyword' state -- it specifies that the results come in pages of 10 at a time
  const loadResults = (page, search=keyword) => {
    axios.get(`/events?_page=${page}&_limit=10&q=${search}`)
      .then(results => {
        setEvents(results.data)
        setPages(Math.ceil(results.headers['x-total-count'] / 10));
      })
  }

  return (
    <div>
     <h1>Historical Event Finder</h1>

    <SearchBar keyword={keyword} setKeyword = {setKeyword} loadResults={loadResults} />

    <Events events={events} pages={pages} loadResults={loadResults}/>

    </div>
  )
}
 export default App;
