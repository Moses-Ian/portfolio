import React, { useState, useEffect } from 'react';
import { useSpring, useTransition, config, animated } from "react-spring";
import Title from './Title';

const height = 201	//height on my screen

const About = ({nextArticle, setArticle}) => {
	
	const visible = nextArticle === 'about';
	
  const fadeStyles = useSpring({
    config: { ...config.stiff },
    from: { opacity: 0 },
    to: {
      opacity: visible ? 1 : 0
    },
		leave: { opacity: 0 }
  });
	
  const slideInStyles = useSpring({
    config: { ...config.stiff },
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
			<Title title='About Me' visible={visible}/>
			<div className="about-text">
				<p>
					Born and raised in Phoenix, Arizona, I am studying to be a full stack web developer. I have a passion for algorithms, UX, and efficiency. My goal is to set a plan and deliver a product that is on time and will amaze your customers.
				</p>
				<p>
					I have a background in engineering and mathematics, which I use to plan efficient designs. I'm skilled at seeing the big picture, along with the details of how to get there. In doing so, I make a conscious effort to neither "miss the forest for the trees" nor "get lost in the woods." I hope you will enjoy examining my portfolio.
				</p>
			</div>
		</animated.article>
	)
};

export default About;