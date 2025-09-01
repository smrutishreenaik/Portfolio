import React from 'react'
import { Container, Button } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <Container className="text-center mt-5">
      <h1>Hello, I am <span style={{ color: "#0d6efd" }}>Your Name</span></h1>
      <p>Full Stack Developer | React | TypeScript | .NET</p>
      <Button variant="primary" href="/projects">View My Work</Button>
    </Container>
  );
};

export default Home;
