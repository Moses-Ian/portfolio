import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
	
	const [currentArticle, setArticle] = useState('about');
	const [nextArticle, setNextArticle] = useState('about');
	
	console.log(`App: currentArticle = ${currentArticle}`);

  return (
    <div className="App">
			<Header 
				currentArticle={currentArticle}
				setArticle={setArticle}
				setNextArticle={setNextArticle}
			/>
			<Hero />
			{ currentArticle === 'about' && <About nextArticle={nextArticle} setArticle={setArticle}/> }
			{ currentArticle === 'work' && <Work nextArticle={nextArticle} setArticle={setArticle} /> }
			{ currentArticle === 'contact' && <Contact /> }
			{ currentArticle === 'resume' && <Resume /> }
			<Footer />
    </div>
  );
}

export default App;
