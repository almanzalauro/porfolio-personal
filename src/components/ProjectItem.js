import React from "react";
import Card from "react-bootstrap/Card";

import './css/projectitem.css';

function ProjectItem({
  title = "titulo",
  img = "imagen",
  description = "descripcion",
  deploy = "deploy",
  code = "github",
}) {
  return (
    <div className="contenedor">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="img" variant="top" src={img} alt="imagen-proyecto" />
        <Card.Body className="card-body">
          <Card.Title className="title">{title}</Card.Title>
          <Card.Text className="description">{description}</Card.Text>
          <div className="card-button">
            <a href={deploy} target="_blank" rel="noopener noreferrer">
              <i class="fa-sharp fa-solid fa-globe"></i>
            </a>
            <a href={code} target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectItem;
