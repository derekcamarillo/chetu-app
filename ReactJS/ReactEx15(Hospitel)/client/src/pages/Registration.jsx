import React, { useState } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';
import './CSS/Reg.css';


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
function Registration() {
	const classes = useStyles();
	const url = "http://127.0.0.1:8000/api/patients/";
	const [data, setData] = useState({
		fname: "",
		lname: "",
		gname: "",
		gmobile: "",
		pemail: "",
		gemail: "",
		pmobile: "",
		amobile: "",
		dob: "",
		doa: "",
		PP: "",
		Dname: "",
		caddress: "",
		paddress: "",
	})
	function submit(e) {
		e.preventDefault();
		axios.post(url, {
			FirstName: data.fname,
			LastName: data.lname,
			Guardian: data.gname,
			GuardianMobile: data.gmobile,
			PatientEmail: data.pemail,
			GuardianEmail: data.gemail,
			PatientMobile: data.pmobile,
			AlterNetMobile: data.amobile,
			DateOfBirth: data.dob,
			DateOfAdmit: data.doa,
			PatientProblem: data.PP,
			DrName: data.Dname,
			CurrentAddress: data.caddress,
			ParmanentAddress: data.paddress,
		})
			.then(res => {
				alert("Registered Successfully")
			})
	}
	function handle(e) {
		const newdata = { ...data }
		newdata[e.target.id] = e.target.value
		setData(newdata)
	}
	return (
		<div className="main">
			<div className="inner">
				<h1>Registration Form</h1>

				<div className='{classes.root}'></div>
				<form onSubmit={(e) => submit(e)}>
					<div>
						<TextField
							required
							label="FirstName"
							type='text'
							onChange={(e) => handle(e)}
							id="fname"
							className={classes.textField}
							helperText="Enter First Name"
							value={data.name}
						/>
						<TextField
							required
							label="LastName"
							type='text'
							onChange={(e) => handle(e)}
							id="lname"
							className={classes.textField}
							helperText="Enter Last Name"
							value={data.name}
						/>
					</div>
					<div>
						<TextField
							required
							label="GuardianName"
							type="text"
							onChange={(e) => handle(e)}
							id="gname"
							value={data.email}
							className={classes.textField}
							helperText="Enter Guardian Name"
						/>
						<TextField
							required
							label="Guardian Mobile No."
							type="number"
							onChange={(e) => handle(e)}
							id="gmobile"
							value={data.email}
							className={classes.textField}
							helperText="Enter Guardian Mobile Number"
						/>
					</div>
					<div>
						<TextField
							required
							label="Patient Email"
							type="email"
							onChange={(e) => handle(e)}
							id="pemail"
							value={data.email}
							className={classes.textField}
							helperText="Enter Patient Email"
						/>
						<TextField
							required
							label="Guardian Email"
							type="email"
							onChange={(e) => handle(e)}
							id="gemail"
							value={data.email}
							className={classes.textField}
							helperText="Enter Guardian Email Address"
						/>
					</div>
					<div>
						<TextField
							required
							label="Mobile No"
							type="number"
							onChange={(e) => handle(e)}
							id="pmobile"
							value={data.mobile}
							className={classes.textField}
							helperText="Enter Patient Mobile Number."
						/>
						<TextField
							required
							label="Alternet Mobile No."
							type="number"
							onChange={(e) => handle(e)}
							id="amobile"
							value={data.mobile}
							className={classes.textField}
							helperText="Enter Alternate Mobile Number."
						/>
					</div>
					<div>
						<TextField
							required
							type="date"
							onChange={(e) => handle(e)}
							id="dob"
							value={data.date}
							className={classes.textField}
							helperText="Enter Date of Birth."
						/>
						<TextField
							required
							type="date"
							onChange={(e) => handle(e)}
							id="doa"
							value={data.date}
							className={classes.textField}
							helperText="Enter Date of admiting"
						/>
					</div>
					<div>
						<TextField
							required
							label="Patient Problem"
							type="text"
							onChange={(e) => handle(e)}
							id="PP"
							value={data.address}
							className={classes.textField}
							helperText="Enter the patient problems"
						/>
						<TextField
							required
							label="Docter"
							type="text"
							onChange={(e) => handle(e)}
							id="Dname"
							value={data.address}
							className={classes.textField}
							helperText="Enter the Assigned Dr. Name"
						/>
					</div>
					<div>
						<TextField
							required
							label="Current Address"
							type="text"
							onChange={(e) => handle(e)}
							id="caddress"
							value={data.company}
							className={classes.textField}
							helperText="Enter Current Address"
						/>
						<TextField
							required
							label="Parmanent Address"
							type="text"
							onChange={(e) => handle(e)}
							id="paddress"
							value={data.company}
							className={classes.textField}
							helperText="Enter Parmanent Address"
						/>
					</div>
					{/* <div>
					<TextField
						required
						label=""
						type="password"
						onChange={(e) => handle(e)}
						id="pass"
						value={data.pass}
						className={classes.textField}
						helperText="Enter Your Password."
					/>
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
				</div> */}
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
	);
};

export default Registration;