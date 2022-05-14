import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const startPage = 'about';	//for debugging

function App() {
	
	const [currentArticle, setArticle] = useState(startPage);
	const [nextArticle, setNextArticle] = useState(startPage);
	
	console.log(`App: currentArticle = ${currentArticle}`);

  return (
    <div className="App">
			<Header 
				currentArticle={currentArticle}
				setNextArticle={setNextArticle}
			/>
			<Hero />
			{ currentArticle === 'about' && <About nextArticle={nextArticle} setArticle={setArticle}/> }
			{ currentArticle === 'work' && <Work nextArticle={nextArticle} setArticle={setArticle} /> }
			{ currentArticle === 'contact' && <Contact nextArticle={nextArticle} setArticle={setArticle} /> }
			{ currentArticle === 'resume' && <Resume nextArticle={nextArticle} setArticle={setArticle} /> }
			<Footer />
    </div>
  );
}

export default App;
