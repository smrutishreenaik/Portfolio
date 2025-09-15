import React from 'react'
import Projects from '../components/Projects';
import CaseStudy from '../components/CaseStudy';
import { Col, Container, Row } from 'react-bootstrap';
import type { RefObject } from 'react';

interface Props {
  projectsRef: RefObject<HTMLDivElement | null>;
  caseStudyRef: RefObject<HTMLDivElement | null>;
}

const ProjectAndCaseStudy: React.FC<Props> = ({ projectsRef, caseStudyRef }) => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col md={5} className="text-center" ref={projectsRef}>
                    <Projects />
                </Col>
                <Col md={1} className="d-none d-md-flex justify-content-center" >
                    <div className="divider" ></div>
                </Col>

                <Col md={6} className="text-center" ref={caseStudyRef}>
                    <CaseStudy />
                </Col>
            </Row>
        </Container>

    );
};

export default ProjectAndCaseStudy;