import React, { useState } from 'react';
import Title from './Title';

const About = () => {
	return (
		<article>
			<Title title='About Me' />
			<div className="about-text">
				<p>
					Born and raised in Phoenix, Arizona, I am studying to be a full stack web developer. I have a passion for algorithms, UX, and efficiency. My goal is to set a plan and deliver a product that is on time and will amaze your customers.
				</p>
				<p>
					I have a background in engineering and mathematics, which I use to plan efficient designs. I'm skilled at seeing the big picture, along with the details of how to get there. In doing so, I make a conscious effort to neither "miss the forest for the trees" nor "get lost in the woods." I hope you will enjoy examining my portfolio.
				</p>
			</div>
		</article>
	)
};

export default About;