import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

// const myChart = new Chart()

const ChartView = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(results => {
        let labels = [];
        let datasets = [{}];
        let data = [];
        let colors = [];
        for (let date in results.data.bpi) {
          labels.push(date);
          data.push(results.data.bpi[date]);
          colors.push('blue');
        }
        // console.log('labels: ', labels);
        // console.log('data: ', data);
        datasets[0].data = data;
        datasets[0].label = 'Price in USD';
        datasets[0].color = colors;
        setData({labels: labels, datasets: datasets})
      })
  }, [])


  return (
    <div>
      <Line
      data={data}
      width={400}
      height={400}
      options={{maintainAspectRatio: false}}
      ></Line>

      <p>Powered by CoinDesk</p>
    </div>
  )
}

export default ChartView;

