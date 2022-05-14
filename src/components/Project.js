import React, { useState, useEffect } from 'react';
import { useSpring, useTransition, config, animated } from "react-spring";

const pub = process.env.PUBLIC_URL;

const Project = ({props}) => {
	
	const [isHovered, setIsHovered] = useState(false);
	const hoverSpring = useSpring({
		config: { ...config.gentle },
		from: {
			backgroundImage: `url(${pub}/${props.img})`,
			opacity: 0.5
			},
		to: {opacity: isHovered ? 1 : 0.5}
	});
	const hover = () => setIsHovered(true);
	const unhover = () => setIsHovered(false);
	
	const growSpring = useSpring({
		config: { ...config.gentle },
		from: {
			height: '0',
			width: '0'
		},
		to: {
			height: isHovered ? '50px' : '0',
			width: isHovered ? '50px' : '0'
		}
	});
	
	
	return (
		<animated.div 
			className="project" 
			id={props.id} 
			style={hoverSpring} 
			onMouseOver={hover}
			onMouseOut={unhover}
		>
			<div className="project-title">
				<h3>{props.title}</h3>
				<p>{props.tech}</p>
			</div>
			<a href={props.link}></a>
			<div className='github'>
				<a href={props.repo}>
					<animated.img 
						src={pub+'/assets/images/github.svg'} 
						style={growSpring}
					/>
				</a>
			</div>
		</animated.div>
	)
};

export default Project;