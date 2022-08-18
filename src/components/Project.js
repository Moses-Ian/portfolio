import React, { useState } from 'react';
import { useSpring, config, animated } from "react-spring";
import {useMedia} from 'react-use';

const pub = process.env.PUBLIC_URL;
const showStyle = {
	height: '50px',
	width: '50px'
}

const Project = ({ project }) => {
	
	const isXSmall = useMedia('(max-width: 576px)');

	const opaqueStyle = {
		backgroundImage: `url(${pub}/${project.img})`,
		opacity: 1
	};

	const [isHovered, setIsHovered] = useState(false);
	const hoverSpring = useSpring({
		config: { ...config.gentle },
		from: {
			backgroundImage: `url(${pub}/${project.img})`,
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
			id={project.id} 
			style={isXSmall ? {...opaqueStyle} : hoverSpring} 
			onMouseOver={hover}
			onMouseOut={unhover}
		>
			<div className="project-title">
				<h3>{project.title}</h3>
				<p>{project.tech}</p>
			</div>
			<a href={project.link} target='_blank' rel='noreferrer'></a>
			<div className='github'>
				<a href={project.repo} target="_blank" rel='noreferrer'>
					<animated.img 
						src={pub+'/assets/images/github.svg'} 
						style={isXSmall ? showStyle : growSpring}
					/>
				</a>
			</div>
		</animated.div>
	)
};

export default Project;