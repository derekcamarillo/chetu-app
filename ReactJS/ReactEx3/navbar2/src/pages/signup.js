import React from 'react';
import './Reg.css'

const SignUp = () => {
return (
	<div className="main">
            <div className="inner">
			<h1>Registration Form</h1>
                <form>
                <div class="row">
					<div class="col-25">
						<label>Full Name:-</label>
					</div>
					<div class="col-75">
						<input type="text" placeholder="Enter Full Name" required/>
					</div>
				</div>
                <div class="row">
					<div class="col-25">
                    <label>Email:- </label>
					</div>
					<div class="col-75">
                    	<input type="text" placeholder="Email" required />
					</div>
                </div>
				<div class="row">
					<div class="col-25">
						<label>Mobile NO:-</label>
					</div>
					<div class="col-75">
						<input type="text" placeholder="Mobile Number" />
					</div>
				</div>
                <div class="row">
					<div class="col-25">
                    <label>Gender:- </label>
					</div>
					<div class="col-75">
                    	Male : <input type="radio"  name="male" />
						Female : <input type="radio"  name="female" />
					</div>
                </div>
                <div class="row">
					<div class="col-25">
						<label>Address :-</label>
					</div>
					<div class="col-75">
						<input type="text" placeholder="Address" />
					</div>
				</div>
                <div class="row">
					<div class="col-25">
                    <label>Comapny:- </label>
					</div>
					<div class="col-75">
                    	<input type="text" placeholder="Enter Company Name" required />
					</div>
                </div>
                <div class="row">
					<input type="submit" value="Submit" />
				</div>
                </form>
            </div>
	</div>
);
};

export default SignUp;
