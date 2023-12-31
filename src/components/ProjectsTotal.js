import projectstotal from '../Data/projects.json';
import ProjectItem from './ProjectItem';
import { Link } from 'react-router-dom';

import './css/projects.css';

function ProjectsTotal() {
  return (
    <div className="contenedor-view">
      <div id="title-content">
        <span className="title">
          <h2>Más projectos</h2>
        </span>
        <span className="more-projects">
            <Link to='/'><button>Volver</button></Link>
        </span>
      </div>

      <div className="projects content">
        {projectstotal.map((item, index) => (
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

export default ProjectsTotal;
