import education from '../Data/education.json';
import EducationItem from './EducationItem';

import './css/education.css';

function Projects() {
  return (
    <div className="education content">
      
      <div id="title-content">
        <span className="title">
          <h2>Educación</h2>
        </span> 
      </div>

      <div className="educations">
        {education.map((item, index) => (
          <EducationItem
            key={index}
            logo={item.logo}
            institucion={item.institucion}
            carrera={item.carrera}
            fecha_inicio_fin={item.fecha_inicio_fin}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
