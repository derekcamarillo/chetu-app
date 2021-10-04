// import React from 'react';
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
// import axios from 'axios';
const Piechart2 = (props) => {
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
      labels: ['Total', 'Confirmed', 'Deaths',
        'Recovered'],
      datasets: [
        {
          label: 'Covid-19',
          backgroundColor: [
            '#3749F1',
            '#33E0E4',
            '#F86B19',
            '#FB2A2A',
            '#50AF14'
          ],
          hoverBackgroundColor: [
            '#2437E0',
            '#15BDC1',
            '#D35913',
            '#E40606',
            '#43A108'
          ],
          // data: [65, 59, 80, 81, 56]
          data: [data.deltaconfirmed, data.deltaconfirmed, data.deltadeaths, data.deltarecovered]
        }
      ]
    }
    

    return (
      <div style={{margin:"25px 0px"}}>
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Covid-19 Delta cases',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
  export default Piechart2;