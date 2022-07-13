import React from 'react';
import FooterLink from './FooterLink';

const Footer = () => {
	
	return (
		<section className='footer'>
			<FooterLink
				href="tel:+14807899331"
				src="/assets/images/phone.svg"
			/>
			<FooterLink
				href="mailto:IMoses2@hotmail.com"
				src="/assets/images/email.svg"
			/>
			<FooterLink
				href="https://github.com/Moses-Ian"
				src="/assets/images/github.svg"
			/>
			<FooterLink
				href="https://www.linkedin.com/in/moses-ian/"
				src="/assets/images/linkedin.svg"
			/>
		</section>
	)
};

export default Footer;