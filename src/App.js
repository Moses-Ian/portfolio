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

  return (
    <div className="App">
			<Header 
				currentArticle={currentArticle}
				setArticle={setArticle}
			/>
			<Hero />
			{ currentArticle === 'about' && <About /> }
			{ currentArticle === 'work' && <Work /> }
			{ currentArticle === 'contact' && <Contact /> }
			{ currentArticle === 'resume' && <Resume /> }
			<Footer />
    </div>
  );
}

export default App;
