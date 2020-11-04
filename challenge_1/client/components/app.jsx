import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const App = () => {

  const testFetch = () => {
    axios.get('/events?date=-300')
      .then(results => {
        console.log(results.data);
      })
  }

  return (
    <div>
     <h1>Historical Event Finder</h1>

    <button onClick={() => testFetch()}>TEST</button>

    </div>
  )
}
 export default App;
