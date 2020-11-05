// this function is used to convert the response from the CoinDesk API to a form that chartjs can use
const wrangle = (results) => {
  let labels = [];
        let datasets = [{}];
        let data = [];
        for (let date in results.data.bpi) {
          labels.push(date);
          data.push(results.data.bpi[date]);
        }
        datasets[0].data = data;
        datasets[0].fill = false;
        datasets[0].borderColor = 'blue';
        datasets[0].label = 'Price in USD';

        return {labels: labels, datasets: datasets};
}

export default wrangle;