import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProjectsTotal from './components/ProjectsTotal';
import Home from './Home';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar sections={['aboutme', 'education', 'contact']} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projectsall" element={<ProjectsTotal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
