import React, { useState } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	  flexWrap: 'wrap',
	},
	textField: {
		marginTop: 20,
		fontSize: '1rem',
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: '35ch',
	},
	button: {
		marginTop: 29,
		margin: theme.spacing(1),
	  },
  }));

const Api3F = () => {
    const classes = useStyles();
		const url = "http://localhost:5000/Employee";
		const[data, setData] = useState({
		  name : "",
		  email : "",
		  mobile : "",
		  date : "",
		  address : "",
		  company : "",
		  pass : ""
		})
		function submit(e){
		  e.preventDefault();
		  axios.post(url,{
			name : data.name,
			email : data.email,
			mobile : data.mobile,
			date : data.date,
			address : data.address,
			company : data.company,
			pass : data.pass
		  })
		  .then(res => {
			alert("Registered Successfully")
		  })
		}
		function handle(e){
		  const newdata = {...data}
		  newdata[e.target.id] = e.target.value
		  setData(newdata)
		}

    return (
        <div>
            <div className="main">
            <div className="inner">
			<h1>Registration Form(Complete)</h1>
            {/* <img alt='Images'></img> */}
			
			<div className='{classes.root}'></div>
                <form onSubmit={(e) => submit(e)}>
                <div>
				<TextField
					required
					label="First Name"
					type='text'
					onChange={(e) => handle(e)}
					id="fname"
					className={classes.textField}
					helperText="Enter Your First Name."
					value={data.fname}
				/>
				<TextField
					required
					label="Last Name"
					type="text"
					onChange={(e) => handle(e)}
					id="lname"
					value={data.lname}
					className={classes.textField}
					helperText="Enter Your Last Name."
				/>
				</div>
				<div>
				<TextField
					required
					label="Mobile No"
					type="number"
					onChange={(e) => handle(e)}
					id="mobile"
					value={data.mobile}
					className={classes.textField}
					helperText="Enter Your Mobile Number."
				/>
				<TextField
					required
                    label="Email"
					type="email"
					onChange={(e) => handle(e)}
					id="email"
					value={data.email}
					className={classes.textField}
					helperText="Enter Your Email-Id."
				/>
				</div>
				<div>
					<TextField
						required
						label="Address"
						type="text"
						onChange={(e) => handle(e)}
						id="address"
						value={data.address}
						className={classes.textField}
						helperText="Enter Your full Address."
					/>
					<TextField
						required
						label="Company"
						type="text"
						onChange={(e) => handle(e)}
						id="company"
						value={data.company}
						className={classes.textField}
						helperText="Enter Your Company Name."
					/>
				</div>
                <div>
					<TextField
						required
						label="Image"
						type="file"
						onChange={(e) => handle(e)}
						id="file"
						value={data.file}
						className={classes.textField}
						helperText="Upload Your passport size Image."
					/>
					<TextField
						required
						type="date"
						onChange={(e) => handle(e)}
						id="dob"
						value={data.dob}
						className={classes.textField}
						helperText="Enter Your Date of Birth."
					/>
				</div>
				<div>
					<TextField
						required
						label="Password"
						type="password"
						onChange={(e) => handle(e)}
						id="pass"
						value={data.pass}
						className={classes.textField}
						helperText="Enter Your Password."
					/>
                    <TextField
						required
						label="Confirm Password"
						type="password"
						onChange={(e) => handle(e)}
						id="cpass"
						value={data.cpass}
						className={classes.textField}
						helperText="Enter Your Confirm Password."
					/>
				</div>
                <div>
				<Button
					variant="contained"
					color="default"
					size="large"
					type="submit"
					className={classes.button}
					startIcon={<LockOpenIcon />}
				>
					Register
				</Button>
				</div>
                </form>
            </div>
	</div>
        </div>
    )
}

export default Api3F
