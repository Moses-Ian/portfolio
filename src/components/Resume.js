import React, { useEffect } from 'react';
import { useSpring, animated } from "react-spring";
import {useMedia} from 'react-use';
import Title from './Title';
import { Spring, Fade } from '../utils/spring';

// const height = 802;	//height on my screen
const heightDict = {
	large: 900,	//height on my screen
	medium: 900,
	small: 887,
	xsmall: 935
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
    ...Fade,
    to: Fade.to(visible),
  });
	
  const slideInStyles = useSpring({
    ...Spring,
    to: Spring.to(visible, height)
  });

	useEffect(() => {
		setTimeout(() => setArticle(nextArticle), 750);
	});

	return (
		<animated.article style={slideInStyles}>
			<Title title='Resume' visible={visible} />
			<animated.div className='about-text' style={fadeStyles}>
				<h3><a className='resume' href={pub + '/assets/files/ian-moses-automation-engineer.pdf'}>Download my resume.</a></h3>
				<p>Automation Proficiencies</p>
				<ul>
					<li>Selenium</li>
					<li>AutoIt</li>
				</ul>
				<p>Front-end Proficiencies</p>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript / TypeScript</li>
					<li>React</li>
					<li>JQuery</li>
					<li>Responsive Design</li>
					<li>Bootstrap</li>
					<li>Foundation</li>
					<li>Handlebars</li>
					<li>Progressive Web Applications</li>
					<li>Android Apps / Kotlin</li>
				</ul>
				<p>Back-end Proficiencies</p>
				<ul>
					<li>AWS</li>
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
				<p>Miscellaneous</p>
				<ul>
					<li>Unity</li>
				</ul>
			</animated.div>
		</animated.article>
	)
};

export default Resume;