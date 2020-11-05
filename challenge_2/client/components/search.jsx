import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import wrangle from '../wrangle.js';

const Search = ({data, setData}) => {
  // default values in case dates are submitted without dates entered
  const [from, setFrom] = useState('2020-04-07');
  const [to, setTo] = useState('2020-11-23');

  const fetchFromAPI = () => {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${from}&end=${to}`)
      .then(results => {
        setData(wrangle(results));
      });
  }

  const handleFormChange = (event, order) => {
    if (order === 'from') {
    setFrom(event.target.value);
  } else
    setTo(event.target.value);
  }

  return (
    <div>
      <h4>Note: please enter dates in year-month-day format, ex: "2013-09-02"</h4>
      <h4>The default range is the past 31 days</h4>

      <label>
        From:
        <input type='text' value={from} onChange={() => {handleFormChange(event, 'from')}}></input>
      </label>

      <label>
        To:
        <input type='text' value={to} onChange={() => {handleFormChange(event, 'to')}}></input>
      </label>

      <button onClick={() => fetchFromAPI()}>Submit</button>

    </div>
  )
}

export default Search;