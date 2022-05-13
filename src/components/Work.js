import React, { useState } from 'react';
import Project from './Project';
import Title from './Title';

const projects = [
	{
		id: 'deck-builder',
		title: 'Deck Builder',
		tech: 'Node/Express/MySQL',
		link: 'https://moses-ian-deck-builder.herokuapp.com/',
		repo: 'https://github.com/Moses-Ian/deck-builder',
		img: 'assets/images/deck-builder-preview.png'
	},
	{
		id: 'copyright-timer',
		title: 'Copyright Timer',
		tech: 'Third Party APIs',
		link: 'https://moses-ian.github.io/copyright-timer',
		repo: 'https://github.com/Moses-Ian/copyright-timer',
		img: 'assets/images/copyright-timer-preview.png'
	},
	{
		id: 'calculator',
		title: 'Calculator',
		tech: 'React/Javascript/CSS',
		link: '#',
		repo: '#',
		img: 'assets/images/mechanical_calculator.jpg'
	},
	{
		id: 'code-quiz',
		title: 'Code Quiz',
		tech: 'Javascript/CSS',
		link: 'https://moses-ian.github.io/code-quiz/',
		repo: 'https://github.com/Moses-Ian/code-quiz',
		img: 'assets/images/code-quiz-preview.png'
	},
	{
		id: 'run-buddy',
		title: 'Run Buddy',
		tech: 'HTML/CSS',
		link: 'https://moses-ian.github.io/run-buddy/',
		repo: 'https://github.com/Moses-Ian/run-buddy',
		img: 'assets/images/run-buddy-preview.png'
	}
]

const Work = () => {
	return (
		<article>
			<Title title='Work' />
			<div className="work-projects">
			{
				projects.map(project => (
					<Project props={project} key={project.id}/>
				))
			}
			</div>
		</article>
	)
};

export default Work;