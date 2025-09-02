import React from 'react'
import { Container, Button, Row, Col } from "react-bootstrap";
import ProfileImg from "../assets/profilePic.jpeg"

const Home: React.FC = () => {
  return (
    <Container className="page">
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <img
            src={ProfileImg}
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </Col>

        <Col md={8}>
          <p className="fs-5 mb-1">HELLO! I am Smrutishree Naik</p>
          <h1 className="fw-bold display-5">
            Full Stack Developer with 3+ years of experience building
          </h1>
          <h2 className="text-secondary fw-bold">
            scalable, secure, and user-centric applications
          </h2>

          <div className="mt-4">
            <Button variant="dark" className="me-2">
              Resume
            </Button>
            <Button variant="dark" className="me-2">
              Email
            </Button>
            <a href="https://linkedin.com" className="text-dark fs-3 me-3">
              linkedin
            </a>
            <a href="https://github.com" className="text-dark fs-3 me-3">
              github
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
