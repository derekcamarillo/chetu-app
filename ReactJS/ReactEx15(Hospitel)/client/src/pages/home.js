import React from 'react'
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from "react-router-dom";
import './home.css'
import Home1 from './HomeCompo/Home1';
import Home2 from './HomeCompo/Home2';
import Home3 from './HomeCompo/Home3';
import Home4 from './HomeCompo/Home4';
// import Home5 from './HomeCompo/Home5';


const home = () => {
    return (
        <div className="Home-main-div">
            <Home1 />
            <Home2 />
            <Home3 />
            <div className="Home4-Datatable">
                <Home4 />
            </div>
            {/* <div >
                <Home5 />
            </div> */}


            <div className="Chat-Div">
                <Link to="/ChatHome" className="Chat-Btn" >
                    <Fab color="primary" aria-label="add">
                        <ChatIcon />
                    </Fab>
                </Link>
            </div>
        </div>
    )
}

export default home
