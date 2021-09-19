import React from 'react';
import './Reg.css'

const RegForm = () => {
    return (
        <div>
            <h1>Registration Form</h1>
            <div>
                <form>
                <div className="name">
                    <level>Full Name:- </level>
                    <input type="text" placeholder="FullName" required />
                </div>
                <div className="email">
                    <level>Email:- </level>
                    <input type="text" placeholder="Email" required />
                </div>
                <div className="gen">
                    <level>Gender:- </level>
                    <input type="text" placeholder="Gender" />
                </div>
                <div className="mob">
                    <level>Mobile No:- </level>
                    <input type="text" placeholder="Mobile No" required />
                </div>
                <div className="dob">
                    <level>Date Of Birth:- </level>
                    <input type="date" />
                </div>
                <div className="add">
                    <level>Address:- </level>
                    <input type="text" placeholder="Address" />
                </div>
                <div className="comp">
                    <level>Company Name:- </level>
                    <input type="text" placeholder="Company Name" />
                </div>
                <div className="btn">
                    <input type="button" value="Submit" />
                </div>
                </form>
            </div>
        </div>
    )
}

export default RegForm
