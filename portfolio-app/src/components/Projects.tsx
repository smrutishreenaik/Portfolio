import React from 'react'
import { Container } from 'react-bootstrap'
import ProjectsImg from "../assets/ProjectsImg.png"

const Projects: React.FC = () => {
  return (
    <Container>
      <img
        src={ProjectsImg}
        alt="Projects"
        width={70}
        className="me-3"
      />
      <h2 className="fw-bold">Projects</h2>
    </Container>
  );
};

export default Projects;