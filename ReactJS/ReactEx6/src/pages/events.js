import React from 'react';
import emailjs from 'emailjs-com';
import './event.css';

export default function Events() {
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
			<h1>Registration Form</h1>
			<form className="contact-form" onSubmit={sendEmail}>
                <div className="row">
					<div className="col-25">
						<label>Name</label>
					</div>
					<div className="col-75">
						<input type="text" name="name" />
					</div>
				</div>
                <div className="row">
					<div className="col-25">
                    	<label>Email</label>
					</div>
					<div className="col-75">
						<input type="email" name="user_email" id="mail" />
					</div>
                </div>
				<div className="row">
					<div className="col-25">
						<label>Message</label>
					</div>
					<div className="col-75">
						<textarea name="message" />	
					</div>
                </div>
                <div className="row">
					<input type="submit" value="Send" />
				</div>
                </form>
            </div>
	</div>
	
  );
}
