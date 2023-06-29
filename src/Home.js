import React from 'react';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';

function Home() {
  return (
    <div>
      <AboutMe />
      <Education />
      <Projects />
    </div>
  );
}

export default Home;