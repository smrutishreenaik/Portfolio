import React from 'react'
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import { Col, Container, Row } from 'react-bootstrap';

interface AboutMeProps {
  handleNavClick: (targetId: string, sectionId?: string) => void;
}

const AboutAndExperience: React.FC<AboutMeProps> = ({ handleNavClick }) => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={5} className="text-center mb-5 mb-md-0" id="about-section">
          <AboutMe handleNavClick={handleNavClick}/>
        </Col>

        <Col md={1} className="d-none d-md-flex justify-content-center">
          <div className="divider"></div>
        </Col>

        <Col md={6} className="text-center mt-5 mt-md-0" id="experience-section">
          <Experience />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutAndExperience;
