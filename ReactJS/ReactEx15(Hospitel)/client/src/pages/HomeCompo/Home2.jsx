import React from 'react';
import './CSS/Home2.css';
import { Link } from 'react-router-dom';

const Home2 = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="box">
          <div className="content">
            <h2>Dr.</h2>
            <h3>Docter Page</h3>
            <p>This is Doctors Page where we can register Doctor and Doctors also login From Here.</p>
            {/* <a href="/docHome">Read More</a> */}
            <Link to="/docHome"><button className="a">Doctors</button></Link>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="box">
          <div className="content">
            <h2>02</h2>
            <h3>Card Two</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
            {/* <a href="/">Read More</a> */}
            <Link to="/docHome"><button className="a">Doctors</button></Link>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="box">
          <div className="content">
            <h2>03</h2>
            <h3>Card Three</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
            {/* <a href="/">Read More</a> */}
            <Link to="/docHome"><button className="a">Doctors</button></Link>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="box">
          <div className="content">
            <h2>04</h2>
            <h3>Card Four</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
            {/* <a href="/">Read More</a> */}
            <Link to="/docHome"><button className="a">Doctors</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home2
