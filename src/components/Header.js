import React, { useState } from 'react';

const Header = ({currentArticle, setNextArticle}) => {
	return (
		<header>
			<div className="name">
				<h1><a href="#">Ian Moses</a></h1>
			</div>
			<nav id="links">
				<div>
					<a className={currentArticle === 'about' ? 'current-article' : ''}
						onClick={() => setNextArticle('about')}>
						About Me
					</a>
					<a className={currentArticle === 'work' ? 'current-article' : ''} 
						onClick={() => setNextArticle('work')}>
						Work
					</a>
					<a className={currentArticle === 'contact' ? 'current-article' : ''} 
						onClick={() => setNextArticle('contact')}>
						Contact Me
					</a>
					<a className={currentArticle === 'resume' ? 'current-article' : ''}
						onClick={() => setNextArticle('resume')}>
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