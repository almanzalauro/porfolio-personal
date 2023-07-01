import React from 'react';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function Home() {
  return (
    <div className="App-home">
      <AboutMe />
      <Education />
      <Projects />
      <Technologies/>
    </div>
  );
}

export default Home;