import React from 'react';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import Tecnologies from './components/Tecnologies';

function Home() {
  return (
    <div className="App-home">
      <AboutMe />
      <Education />
      <Projects />
      <Tecnologies/>
    </div>
  );
}

export default Home;