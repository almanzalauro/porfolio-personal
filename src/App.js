import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import ProjectsTotal from './components/ProjectsTotal';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <AboutMe/>
        <Education/>
        <Projects/>
        <Routes>
          <Route path="/projectsall" element={<ProjectsTotal/>} />
        </Routes>
        <ContactMe/>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
