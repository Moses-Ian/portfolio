import React, { useState } from 'react';

const pub = process.env.PUBLIC_URL;

const Footer = () => {
	return (
		<section className='footer'>
			<a href="tel:+14807899331"><img src={pub + '/assets/images/phone.svg'}  /></a>
			<a href="mailto:ian.moses2@outlook.com"><img src={pub + '/assets/images/email.svg'}  /></a>
			<a href="https://github.com/Moses-Ian"><img src={pub + '/assets/images/github.svg'}  /></a>
			<a href="https://www.linkedin.com/in/ian-moses-613a1690/"><img src={pub + '/assets/images/linkedin.svg'}  /></a>
		</section>
	)
};

export default Footer;