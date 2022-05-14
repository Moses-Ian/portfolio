import React, { useState, useEffect } from 'react';
import { useSpring, useTransition, config, animated } from "react-spring";
import { validateEmail } from '../utils/helpers';
import Title from './Title';

const height = 219;	//height on my screen

const Contact = ({nextArticle, setArticle}) => {
	
	//error message nonsense
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
	
	//animation nonsense
	const visible = nextArticle === 'contact';

  const fadeStyles = useSpring({
    config: { ...config.molasses },
    from: { opacity: 0 },
    to: {
      opacity: visible ? 1 : 0
    },
		leave: { opacity: 0 }
  });
	
  const slideInStyles = useSpring({
    config: { ...config.wobbly },
    from: { opacity: 0, height: 0 },
    to: {
      opacity: visible ? 1 : 0,
      height: visible ? height : 0
    }
  });

	useEffect(() => {
		setTimeout(() => setArticle(nextArticle), 500);
	});

	return (
		<animated.article style={slideInStyles}>
			<Title title='Contact Me' visible={visible} />
			<animated.div className="contact-info" style={fadeStyles}>
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
			</animated.div>
		</animated.article>
	)
};

export default Contact;