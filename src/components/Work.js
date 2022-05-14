import React, { useState, useEffect } from 'react';
import { useSpring, useTransition, config, animated } from "react-spring";
import {useMedia} from 'react-use';
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

const heightDict = {
	large: 582,	//height on my screen
	medium: 1050,
	small: 1018,
	xsmall: 1065
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
			<Title title='Work' visible={visible} />
			<animated.div className="work-projects" style={fadeStyles}>
			{
				projects.map(project => (
					<Project props={project} key={project.id}/>
				))
			}
			</animated.div>
		</animated.article>
	)
};

export default Work;