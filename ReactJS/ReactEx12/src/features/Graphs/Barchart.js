import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const Barchart = () => {

  const [data, setData] = useState([])
  const getCovidData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/statewise`);
      // const res = await fetch(`https://data.covid19india.org/data.json`);
      const actualData = await res.json();
      // console.log(actualData.statewise[0]);
      console.log(actualData[0]);

      // setData(actualData.statewise[0]);
      setData(actualData[0]);

    } catch (err) {
      // console.log(err);
    }
  }

  useEffect(() => {
    getCovidData();
  }, [])

  const state = {
    labels: ['Total', 'Confirmed', 'Active', 'Deaths',
      'Recovered'],
    datasets: [
      {
        label: 'Covid-19',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        // data: [65, 59, 80, 81, 56]
        data: [data.confirmed, data.confirmed, data.active, data.deaths, data.recovered]
      }
    ]
  }

  return (
    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: 'Covid-19 Cases tracker',
            fontSize: 20
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  );
}
export default Barchart;