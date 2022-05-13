import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import Title from './Title';

const Contact = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [formState, setFormState] = useState({ name: '', email: '', message: '' });
	const { name, email, message } = formState;
	
	function handleChange(e) {

	let err = '';
	switch (e.target.name) {
		case 'name':
			if (!e.target.value.length)
				err = 'Name is required.';
			break;
		case 'email':
			if (!validateEmail(e.target.value))
				err = 'Your email is invalid.';
			break;
		case 'message':
			if (!e.target.value.length)
				err = 'Message is required.';
			break;
	}

	setErrorMessage(err);

	if (!errorMessage) {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	}
}
	
	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
	}

	return (
		<article>
			<Title title='Contact Me' />
			<div className="contact-info">
				<form id="contact-form" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">Name:</label>
						<input type="text" defaultValue={name} onBlur={handleChange} name="name" />
					</div>
					<div>
						<label htmlFor="email">Email address:</label>
						<input type="email" defaultValue={email} name="email" onBlur={handleChange} />
					</div>
					<div>
						<label htmlFor="message">Message:</label>
						<textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
					</div>
					{errorMessage && (
						<div>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
					<button type="submit" data-testid="submit">Submit</button>
				</form>
			</div>
		</article>
	)
};

export default Contact;