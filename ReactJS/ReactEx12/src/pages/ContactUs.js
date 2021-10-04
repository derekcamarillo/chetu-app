import React from "react";
import emailjs from 'emailjs-com';
import './Contect.css';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
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

const Contact = () => {
	const classes = useStyles();
	function sendEmail(e) {
		const user_email = document.getElementById("mail").value;
		e.preventDefault();

		emailjs.sendForm('service_xuzckh5', 'template_cvmjyb2', e.target, 'user_BNyq9t6amdRSKRLGQa4w2', user_email)
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	}

	return (
		<div className="main">
			<div className="inner">
				<h1>Contect Us</h1>
				<div className='{classes.root}'>
					<form className="contact-form" onSubmit={sendEmail}>
						<div>
							<TextField
								label="Name"
								type='text'
								id="name"
								className={classes.textField}
								helperText="Enter Your Full Name"
								name='name'
							/>
						</div>
						<div>
							<TextField
								label="Mobile No."
								type='number'
								id="mobile"
								className={classes.textField}
								helperText="Enter Your Mobile Number"
								name='mobile'
							/>
						</div>
						<div>
							<TextField
								label="Email"
								type="email"
								id="mail"
								name="user_email"
								className={classes.textField}
								helperText="Enter Your Email Address"
							/>
						</div>
						<div>
							<TextareaAutosize
								aria-label="minimum height"
								minRows={4}
								name="message"
								className={classes.textField}
								placeholder="Enter your Message."
								style={{padding:"15px"}}
							/>
						</div>
						<div>
							<Button
								variant="contained"
								color="default"
								size="large"
								type="submit"
								value="Send"
								className={classes.button}
								startIcon={<SendIcon />}
							>
								Send Responce
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;