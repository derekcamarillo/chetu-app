import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';
import './CSS/Sign.css'


class Login extends Component {
	state = {
		credentials: { username: '', password: '' }
	}

	login = event => {
		fetch('http://127.0.0.1:8000/auth/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(this.state.credentials)
		})
			// .then( data => data.json())
			.then(
				function(response){
					console.log(response);
					if(response.data.length === 1) {
						// setIsLogin(true)
						// history.push("/")
					}else{
						// setLoginError(true)
					}
				}
			)
			.catch(error => console.error(error))
		// console.log(this.state.credentials);
	}


	inputChanged = event => {
		const cred = this.state.credentials;
		cred[event.target.name] = event.target.value;
		this.setState({ credentials: cred });
	}

	render() {
		return (
			<>
				<div className="main">
					<div className="inner">
						<div>
							<h1>LogIn here</h1>
							<form >
								<div className="Login-input">
									<TextField
										label="UserName"
										type="text"
										name = "username"
										placeholder='Enter Your Username'
										helperText="Enter Your UserName for Login."
										value={this.state.credentials.username}
										onChange={this.inputChanged}

									/>
								</div>
								<div className="Login-input">
									<TextField
										label="Password"
										type="password"
										name="password"
										placeholder='Enter Your Password'
										helperText="Enter Your Password for Login"
										value={this.state.credentials.password}
										onChange={this.inputChanged}

									/>
								</div>
								<div className="Login-btn">
									<Button
										variant="contained"
										color="default"
										size="large"
										startIcon={<LockOpenIcon />}
										onClick={this.login}
									>
										LogIn
									</Button>
								</div>
								<div style={{ marginTop: '30px' }}>
									<Button color="secondary">Forget Password</Button>
								</div>
								<div style={{ marginTop: '10px' }}>
									<Button color="primary">Register NoW</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Login;