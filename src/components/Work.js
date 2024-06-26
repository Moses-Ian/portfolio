import React, { useEffect } from 'react';
import { useSpring, animated } from "react-spring";
import {useMedia} from 'react-use';
import Project from './Project';
import Title from './Title';
import { Spring, Fade } from '../utils/spring';

const projects = [
	{
		id: 'l3tters',
		title: 'L3tters',
		tech: 'React/Socket.io/GraphQL',
		link: 'https://l3tters.herokuapp.com/',
		repo: 'https://github.com/Moses-Ian/letters',
		img: 'assets/images/l3tters-preview.png'
	},
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
		id: 'flocking',
		title: 'Flocking Simulation',
		tech: 'p5.js',
		link: 'https://moses-ian.github.io/flocking/',
		repo: 'https://github.com/Moses-Ian/flocking',
		//img: 'assets/images/flocking-preview.png'
		img: 'assets/images/flocking_animation.gif'
	},
	{
		id: 'risk-campaign-calculator',
		title: 'Risk Campaign Calculator',
		tech: 'Android/Kotlin/Math',
		link: 'https://play.google.com/store/apps/details?id=com.mosesian.riskcampaigncalculator',
		repo: 'https://github.com/Moses-Ian/risk-campaign-calculator',
		img: 'assets/images/risk-preview.png'
	},
	{
		id: 'snake-A-Star',
		title: 'Snake with A* Algorithm',
		tech: 'p5/A*',
		link: 'https://moses-ian.github.io/snake-A-Star/',
		repo: 'https://github.com/Moses-Ian/snake-A-Star',
		img: 'assets/images/snake-preview.png'
	},
	{
		id: 'minesweeper-solver',
		title: 'Minesweeper Bot',
		tech: 'C#/Selenium',
		link: 'https://moses-ian.github.io/minesweeper-solver/',
		repo: 'https://github.com/Moses-Ian/minesweeper-solver',
		img: 'assets/images/minesweeper-preview.png'
	},
	{
		id: 'rubiks-cube-A-star',
		title: "Rubik's Cube with A*",
		tech: 'three.js/A*',
		link: 'https://moses-ian.github.io/rubiks-cube-a-star/',
		repo: 'https://github.com/Moses-Ian/rubiks-cube-a-star',
		img: 'assets/images/rubik-preview.png'
	},
	{
		id: 'lazer-defender',
		title: "Lazer Defender",
		tech: 'Unity',
		link: 'https://moses-ian.github.io/Lazer-Defender/',
		repo: 'https://github.com/Moses-Ian/lazer-defender',
		img: 'assets/images/lazer-defender-preview.png'
	},
	{
		id: 'metaballs',
		title: "Metaballs",
		tech: 'Shaders',
		link: 'https://moses-ian.github.io/metaballs/',
		repo: 'https://github.com/Moses-Ian/metaballs',
		img: 'assets/images/metaballs-preview.png'
	}
]

const heightDict = {
	large: 782,	//height on my screen
	medium: 1870,
	small: 1808,
	xsmall: 1805
};

const Work = ({nextArticle, setArticle}) => {

	const visible = nextArticle === 'work';

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
			<Title title='Work' visible={visible} />
			<animated.div className="work-projects" style={fadeStyles}>
			{
				projects.map(project => (
					<Project project={project} key={project.id}/>
				))
			}
			</animated.div>
		</animated.article>
	)
};

export default Work;