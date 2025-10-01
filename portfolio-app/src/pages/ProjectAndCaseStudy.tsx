import React from 'react'
import Projects from '../components/Projects';
import CaseStudy from '../components/CaseStudy';
import { Col, Container, Row } from 'react-bootstrap';


const ProjectAndCaseStudy: React.FC = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col md={5} className="text-center" id="project-section">
                    <Projects />
                </Col>
                <Col md={1} className="d-none d-md-flex justify-content-center" >
                    <div className="divider" ></div>
                </Col>

                <Col md={6} className="text-center" id="caseStudy-section">
                    <CaseStudy />
                </Col>
            </Row>
        </Container>

    );
};

export default ProjectAndCaseStudy;