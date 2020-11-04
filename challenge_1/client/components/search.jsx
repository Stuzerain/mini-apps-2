import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const SearchBar = ({keyword, setKeyword, loadResults}) => {


  // function that keeps the 'keyword' state consistent with what is typed in the search box
  const handleFormInputChange = (event) => {
    setKeyword(event.target.value);
  }



  return (
    <div>
      {/* sets the 'keyword' state equal to a search term  */}
      <input type='text' value={keyword} onChange={(e) => {handleFormInputChange(event)}}></input>
      {/* searches by the 'keyword' state search term and loads page 1 of results w/ up to 10 results per page */}
      <button onClick={() => loadResults(1, keyword)}>Load results</button>
    </div>
  )
}
 export default SearchBar;


