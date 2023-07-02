import projects from '../Data/projectsview.json';
import ProjectItem from './ProjectItem';
import { Link } from 'react-router-dom';

import './css/projects.css';

function Projects() {
  return (
    <div className="contenedor-view content">
      <div id="title-content">
        <span className="title">
          <h2>Projectos</h2>
        </span>
        <span className="more-projects">
        <Link to='/projectsall'><button>Ver más</button></Link>
        </span>
      </div>

      <div className="projects">
        {projects.map((item, index) => (
          <ProjectItem
            key={index}
            title={item.title}
            img={item.img}
            description={item.description}
            deploy={item.deploy}
            github={item.code}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
