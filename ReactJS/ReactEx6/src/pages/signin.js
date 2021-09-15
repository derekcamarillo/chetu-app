import React from 'react';
import './Sign.css'

const Signin = () => {
return (
	<div className="main">
            <div className="inner">
			<h1>Registration Form</h1>
                <form>
                <div class="row">
					<div class="col-25">
						<label>User ID:-</label>
					</div>
					<div class="col-75">
						<input type="text" placeholder="Enter your Email..." required/>
					</div>
				</div>
                <div class="row">
					<div class="col-25">
                    <label>Password:-</label>
					</div>
					<div class="col-75">
                    	<input type="password" placeholder="Enter your Password.." required />
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

export default Signin;
