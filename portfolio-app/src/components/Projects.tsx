import React from 'react'
import { Container } from 'react-bootstrap'

const Projects: React.FC = () => {
  return (
    <Container>
      <img
        src="/assets/projects.png"
        alt="Projects"
        className="icon-img mb-3"
      />
      <h2 className="fw-bold">Projects</h2>
    </Container>
  );
};

export default Projects;