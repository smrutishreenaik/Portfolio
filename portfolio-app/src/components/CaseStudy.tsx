import React from 'react'
import { Container } from 'react-bootstrap';
import CaseStudyImg from "../assets/CaseStudyImg.png"

const CaseStudy: React.FC = () => {
  return (
    <Container>
      <img
        src={CaseStudyImg}
        alt="Case Study"
        width={70}
        className="me-3"
      />
      <h2 className="fw-bold text-muted">Case Study</h2>
    </Container>
  );
};

export default CaseStudy;