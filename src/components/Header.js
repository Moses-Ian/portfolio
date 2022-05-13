import React, { useState } from 'react';

const Header = ({currentArticle, setArticle}) => {
	return (
		<header>
			<div className="name">
				<h1><a href="#">Ian Moses v0.0.4</a></h1>
			</div>
			<nav id="links">
				<div>
					<a className={currentArticle === 'about' ? 'current-article' : ''}
						onClick={() => setArticle('about')}>
						About Me
					</a>
					<a className={currentArticle === 'work' ? 'current-article' : ''} 
						onClick={() => setArticle('work')}>
						Work
					</a>
					<a className={currentArticle === 'contact' ? 'current-article' : ''} 
						onClick={() => setArticle('contact')}>
						Contact Me
					</a>
					<a className={currentArticle === 'resume' ? 'current-article' : ''}
						onClick={() => setArticle('resume')}>
						Resume
					</a>
				</div>
			</nav>
			<a href="javascript:void(0);" className="icon" onClick="myFunction()">
				<img className="hamburger" src="./assets/images/hamburger-icon.png" />
			</a>
		</header>
	)
};

export default Header;