import React from "react";

import './css/education.css';

function EducationItem({
    logo = "logo-institucion",
    institucion = "nombre de la institucion",
    carrera = "nombre de carrera",
    fecha_inicio_fin = "fecha de inicio",
}) {
    return (
        <div className="item-education">

            <div className="logo-education">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
            </div>

            <div className="description-education">
                <h2>{institucion}</h2>
                <h3>{carrera}</h3>
                <p>{fecha_inicio_fin}</p>
            </div>
            
        </div>
    );
}

export default EducationItem;
