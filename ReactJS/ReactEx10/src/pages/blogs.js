import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

function Blogs() {
	const [toSend, setToSend] = useState({
	  from_name: '',
	  to_name: '',
	  message: '',
	  reply_to: '',
	});
  
	const onSubmit = (e) => {
		e.preventDefault();
		send(
		  'service_xuzckh5',
		  'template_cvmjyb2',
		  toSend,
		  'user_BNyq9t6amdRSKRLGQa4w2'
		)
		  .then((response) => {
			console.log('SUCCESS!', response.status, response.text);
		  })
		  .catch((err) => {
			console.log('FAILED...', err);
		  });
	  };
  
	const handleChange = (e) => {
	  setToSend({ ...toSend.value, [e.target.name]: e.target.value });
	};
  
	return (
	  <div className='App'>
		{/* --- FORM --- */}
		<>
		<form onSubmit={onSubmit}>
			<input type='text' name='from_name' placeholder='from name' value={toSend.from_name} onChange={handleChange}/>
			<input type='text' name='to_name' placeholder='to name' value={toSend.to_name} onChange={handleChange} />
			<input type='text' name='message' placeholder='Your message' value={toSend.message} onChange={handleChange} />
			<input type='text' name='reply_to' placeholder='Your email' value={toSend.reply_to} onChange={handleChange} />
			<button type='submit'>Submit</button>
		</form>
		</>
	  </div>
	);
  }

export default Blogs;