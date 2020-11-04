import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const SearchBar = ({setEvents}) => {

  // state that holds the keyword that will be used to search
  const [keyword, setKeyword] = useState('')

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

  return (
    <div>
      {/* sets the 'keyword' state equal to a search term  */}
      <input type='text' value={keyword} onChange={(e) => {handleFormInputChange(event)}}></input>
      {/* searches by the 'keyword' state search term and loads page 1 of results w/ up to 10 results per page */}
      <button onClick={() => loadResults(keyword)}>Load results</button>
    </div>
  )
}
 export default SearchBar;


