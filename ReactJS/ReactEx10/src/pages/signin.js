import React, { useState } from 'react'
import axios from 'axios';
import './Sign.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";



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
  	
function Signin(){
	const history = useHistory();
	const classes = useStyles();
	const [isLogin, setIsLogin] = useState(false);
	const [loginError, setLoginError] = useState(false);
	const [email, setUName] = useState("");
	const [pass, setUPass] = useState("");
	
	
	const HandleLogin = () => {
		console.log("email", email, "pass", pass);
		axios.get(`http://localhost:3000/login?email=${email}&pass=${pass}`)
			.then(function(response){
				console.log(response);
				if(response.data.length === 1) {
					setIsLogin(true)
					history.push("/")
				}else{
					setLoginError(true)
				}
			})
		};
return (
	<>
	<div className="main">
            <div className="inner">
			{isLogin?(""):
			<div>
				{loginError?(<p><b>Enter Correct User Name and Password</b></p>):<></>}
			<h1>LogIn here</h1>
			<div className='{classes.root}'>
                <form >
					<div>
				<TextField
					label="Email"
					type="text"
					value={email}
					placeholder='Enter Your Email'
					className={classes.textField}
					helperText="Enter Your Email for Login."
					onChange={(e) => setUName(e.target.value)}
				/>
				</div>
				<div>
				<TextField
					label="Password"
					type="password"
					value={pass}
					placeholder='Enter Your Password'
					className={classes.textField}
					helperText="Enter Your Password for Login"
					onChange={(e) => setUPass(e.target.value)}
				/>
				</div>
				<div>
				<Button
					variant="contained"
					color="default"
					size="large"
					className={classes.button}
					startIcon={<LockOpenIcon />}
					onClick={() => HandleLogin()}
				>
					LogIn
				</Button>
				</div>
				<div style={{marginTop: '30px'}}>
					<Button color="secondary">Forget Password</Button>
				</div>
				<div style={{marginTop: '10px'}}>
					<Button color="primary">Register NoW</Button>
				</div>
                </form>
			</div>
			</div>
}
            </div>
	</div>
</>
)
}

export default Signin;
