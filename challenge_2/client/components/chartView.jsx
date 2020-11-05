import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Line} from 'react-chartjs-2';
import axios from 'axios';
import Search from './search.jsx';

import wrangle from '../wrangle.js';

const ChartView = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(results => {
        setData(wrangle(results))
      })
  }, [])


  return (
    <div>
      <Search data={data} setData={setData}/>
      <Line
      data={data}
      width={400}
      height={400}
      options={{maintainAspectRatio: false, color: ['blue']}}
      ></Line>

      <p>Powered by CoinDesk</p>
    </div>
  )
}

export default ChartView;

