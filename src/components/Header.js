import React, { useEffect } from 'react';
import {useMedia} from 'react-use';

const pub = process.env.PUBLIC_URL;

const Header = ({currentArticle, setNextArticle}) => {

	const toggleNav = () => {
		let x = document.getElementById("links");
		if (x.style.display === "block") {
			x.style.display = "none";
		} else {
			x.style.display = "block";
		}
	};
	
	const isXSmall = useMedia('(max-width: 576px)');
	
	useEffect(() => {
		if (!isXSmall)
			document.getElementById("links").style.display = "block";
		else
			document.getElementById("links").style.display = "none";
	});

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
			<a className="icon" onClick={toggleNav}>
				<img className="hamburger" src={pub + "/assets/images/hamburger-icon.png"} alt="" />
			</a>
		</header>
	)
};

export default Header;