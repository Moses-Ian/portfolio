import React, { useState, useEffect } from 'react';
import { useSpring, useTransition, config, animated } from "react-spring";
import {useMedia} from 'react-use';
import Title from './Title';

const height = 802;	//height on my screen
const heightDict = {
	large: 820,	//height on my screen
	medium: 820,
	small: 807,
	xsmall: 855
};
const pub = process.env.PUBLIC_URL;

const Resume = ({nextArticle, setArticle}) => {
	const visible = nextArticle === 'resume';

	const isMedium = useMedia('(max-width: 980px)');
	const isSmall  = useMedia('(max-width: 768px)');
	const isXSmall = useMedia('(max-width: 576px)');
	let height;
	if (isXSmall)
		height = heightDict['xsmall'];
	else if (isSmall)
		height = heightDict['small'];
	else if (isMedium)
		height = heightDict['medium'];
	else
		height = heightDict['large'];

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
			<Title title='Resume' visible={visible} />
			<animated.div className='about-text' style={fadeStyles}>
				<h3><a className='resume' href={pub + '/assets/files/ian-moses-full-stack-developer.pdf'}>Download my resume.</a></h3>
				<p>Front-end Proficiencies</p>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>React</li>
					<li>JQuery</li>
					<li>Responsive Design</li>
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
					<li>C# and .NET</li>
				</ul>
				<p>Soft Skills</p>
				<ul>
					<li>Test-Driven Development</li>
					<li>Certified SCRUM Master</li>
					<li>Kanban</li>
					<li>Kaizen</li>
					<li>Communication</li>
					<li>Organization</li>
					<li>Teamwork</li>
					<li>Adaptability</li>
				</ul>
			</animated.div>
		</animated.article>
	)
};

export default Resume;