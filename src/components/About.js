import React, { useEffect } from 'react';
import { useSpring, animated } from "react-spring";
import {useMedia} from 'react-use';
import Title from './Title';
import { Spring, Fade } from '../utils/spring';

const heightDict = {
	large: 201,	//height on my screen
	medium: 280,
	small: 200,
	tiny: 260,
	xsmall: 307,
	xxsmall: 347
};


const About = ({nextArticle, setArticle}) => {
	
	const visible = nextArticle === 'about';
	
	const isMedium = useMedia('(max-width: 980px)');
	const isSmall  = useMedia('(max-width: 768px)');
	const isTiny   = useMedia('(max-width: 696px)');
	const isXSmall = useMedia('(max-width: 576px)');
	const isXXSmall = useMedia('(max-width: 420px)');
	let height;
	if (isXXSmall)
		height = heightDict['xxsmall'];
	else if (isXSmall)
		height = heightDict['xsmall'];
	else if (isTiny)
		height = heightDict['tiny'];
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
			<Title title='About Me' visible={visible}/>
			<animated.div className="about-text" style={fadeStyles}>
				<p>
					Full stack web developer leveraging engineering background to build functional web apps. Innovative problem solver with extensive experience in math and engineering. Excited to deliver value to customers alongside peers.

				</p>
				<p>
					I have a background in engineering and mathematics, which I use to plan efficient designs. I'm skilled at seeing the big picture, along with the details of how to get there. In doing so, I make a conscious effort to neither "miss the forest for the trees" nor "get lost in the woods." I hope you will enjoy examining my portfolio.
				</p>
			</animated.div>
		</animated.article>
	)
};

export default About;