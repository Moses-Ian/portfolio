import React, { useState } from 'react';

const Project = ({props}) => {
	return (
		<div className="project" id={props.id} style={{backgroundImage: `url(${props.img})`}}>
			<div className="project-title">
				<h3>{props.title}</h3>
				<p>{props.tech}</p>
			</div>
			<a href={props.link}></a>
			<div className='github'>
				<a href={props.repo}><img src='assets/images/github.svg'  /></a>
			</div>
		</div>
	)
};

export default Project;