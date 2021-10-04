import React, { useEffect, useState } from 'react'
import "./index.css"
import Piechart from '../features/Graphs/Piechart';
import Piechart1 from '../features/Graphs/Piechart1';
import Piechart2 from '../features/Graphs/Piechart2';
import Piechart3 from '../features/Graphs/Piechart2_2';
import Barchart from "../features/Graphs/Barchart";
import Barchart1 from "../features/Graphs/Barchart1";
import Linegraph from "../features/Graphs/Linegraph";
import Linegraph1 from '../features/Graphs/Linegraph1';

const Index = (props) => {
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


    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    // console.clear();
    return (
        <>
            <div className="home">
                <div className="main2" >
                    <div className="card">
                        <h3 className="ch">Countery</h3>
                        <h2>India</h2>
                    </div>
                    <div className="card">
                        <h3 className="ch">Total Cases</h3>
                        <h2>{data.confirmed}</h2>
                    </div>
                    <div className="card">
                        <h3 className="ch">Confirmed</h3>
                        <h2>{data.confirmed}</h2>
                    </div>
                    <div className="card">
                        <h3 className="ch">Active</h3>
                        <h2>{data.active}</h2>
                    </div>
                    <div className="card">
                        <h3 className="ch">Deaths</h3>
                        <h2>{data.deaths}</h2>
                    </div>
                    <div className="card">
                        <h3 className="ch">Recovered</h3>
                        <h2>{data.recovered}</h2>
                    </div>
                    <div className="card">
                        <h3 className="ch">Total Delta</h3>
                        <h2>{data.deltaconfirmed}</h2>
                    </div>
                    <div className="card">
                        <h3 className="ch">Delta Confirmed</h3>
                        <h2>{data.deltaconfirmed}</h2>
                    </div>
                    <div className="card">
                        <h3 className="ch">Delta Deaths</h3>
                        <h2>{data.deltadeaths}</h2>
                    </div>
                    <div className="card">
                        <h3 className="ch">Delta Recovered</h3>
                        <h2>{data.deltarecovered}</h2>
                    </div>
                    <div className="card">
                        <h3 className="ch">Migrate and Other</h3>
                        <h2>{data.migratedother}</h2>
                    </div>
                    <div className="card">
                        <h3 className="ch">Date:- {date}</h3>
                        <h3>Time:- {time}</h3>
                    </div>
                </div>
            </div>
            <div className="chartmain">
                <h1 style={{ textAlign: "center", margin: "25px" }}>Covid-19 Cases showing in Pie Chart and Doughnut Chart</h1>
                <div className="chartsCh1">
                    <h1 style={{ margin: "25px" }}>Total Covid-19 Cases</h1>
                    <div className="Piediv">
                        <Piechart />
                    </div>
                </div>
                <div className="chartsCh2">
                    <h1 style={{ margin: "25px" }}>Total Covid-19 Cases</h1>
                    <div className="Piediv">
                        <Piechart1 />
                    </div>
                </div>
                <div className="chartsCh2">
                    <h1 style={{ margin: "25px" }}>Covid-19 Delta Cases</h1>
                    <div className="Piediv">
                        <Piechart3 />
                    </div>
                </div>
                <div className="chartsCh2">
                    <h1 style={{ margin: "25px" }}>Covid-19 Delta Cases</h1>
                    <div className="Piediv">
                        <Piechart2 />
                    </div>
                </div>
            </div>
            <div className="chartmain">
                <div className="chartsCh1">
                    <h1 style={{ margin: "25px" }}>Total Covid-19 Cases</h1>
                    <div className="Piediv">
                        <Barchart />
                    </div>
                </div>
                <div className="chartsCh2">
                    <h1 style={{ margin: "25px" }}>Covid-19 Delta Cases</h1>
                    <div className="Piediv">
                        <Barchart1 />
                    </div>
                </div>
                <div className="chartsCh2">
                    <h1 style={{ margin: "25px" }}>Total Covid-19 Cases</h1>
                    <div className="Piediv">
                        <Linegraph />
                    </div>
                </div>
                <div className="chartsCh2">
                    <h1 style={{ margin: "25px" }}>Covid-19 Delta Cases</h1>
                    <div className="Piediv">
                        <Linegraph1 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index