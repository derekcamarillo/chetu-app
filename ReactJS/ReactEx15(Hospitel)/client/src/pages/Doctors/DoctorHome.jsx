import React from 'react';
import { Link } from 'react-router-dom';

const DoctorHome = () => {
    return (
        <div className="main">
            <div className="inner">
                <div>
                <Link to="/docReg"><button>Register The Doctor</button></Link>
                </div>
            </div>
        </div>
    )
}

export default DoctorHome
