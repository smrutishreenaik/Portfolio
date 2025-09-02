import React from 'react'
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import { Col, Container, Row } from 'react-bootstrap';

const AboutAndExperience: React.FC = () => {

    return (
        <Container className="page">
            <Row className="align-items-center">
                <Col md={5} className="text-center">
                    <AboutMe />
                </Col>

                <Col md={1} className="d-none d-md-flex justify-content-center" >
                    <div className="divider" ></div>
                </Col>

                <Col md={6} className="text-center">
                    <Experience />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutAndExperience;