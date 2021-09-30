import React, { useEffect, useState } from 'react'
import "./index.css"
// import axios from 'axios';

const Index = () => {
    const [data, setData] = useState([])
    const getCovidData = async () => {
        try {
            const res = await fetch(`https://data.covid19india.org/data.json`);
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])



    return (
        <div className="home">
            <div className="main">
                <div className="card1">
                    <h3>Total Cases</h3>
                    <h2>{data.confirmed}</h2>
                </div>
                <div className="card2">
                    Hello2
                </div>
                <div className="card3">
                    Hello3
                </div>
            </div>
        </div>
    )
}

export default Index
