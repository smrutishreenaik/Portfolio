import React from 'react'
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import { Col, Container, Row } from 'react-bootstrap';
import type { RefObject } from 'react';

interface Props {
  aboutRef: RefObject<HTMLDivElement | null>;
  experienceRef: RefObject<HTMLDivElement | null>;
}

const AboutAndExperience: React.FC<Props> = ({ aboutRef, experienceRef }) => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={5} className="text-center" ref={aboutRef}>
            <AboutMe />
        </Col>

        <Col md={1} className="d-none d-md-flex justify-content-center">
          <div className="divider"></div>
        </Col>

        <Col md={6} className="text-center" ref={experienceRef}>
            <Experience />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutAndExperience;
