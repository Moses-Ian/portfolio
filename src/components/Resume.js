import React, { useState } from 'react';
import Title from './Title';

const Resume = () => {
	return (
		<article>
			<Title title='Resume' />
			<div className='about-text'>
				<p><a href='assets/files/ian-moses-full-stack-developer.pdf'>Download my resume.</a></p>
				<p>Front-end Proficiencies</p>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>JQuery</li>
					<li>Responsive Design</li>
					<li>React</li>
					<li>Bootstrap</li>
					<li>Foundation</li>
					<li>Handlebars</li>
					<li>Progressive Web Applications</li>
				</ul>
				<p>Back-end Proficiencies</p>
				<ul>
					<li>APIs</li>
					<li>Node</li>
					<li>Express</li>
					<li>MySQL/Sequelize</li>
					<li>MongoDB/Mongoose</li>
					<li>REST</li>
					<li>GraphQL</li>
					<li>Socket.io</li>
				</ul>
				<p>Soft Skills</p>
				<ul>
					<li>Certified SCRUM Master</li>
					<li>Kanban</li>
					<li>Kaizen</li>
					<li>Communication</li>
					<li>Organization</li>
					<li>Teamwork</li>
					<li>Adaptability</li>
				</ul>
			</div>
		</article>
	)
};

export default Resume;