import React from 'react'
import { Container } from 'react-bootstrap';

const CaseStudy: React.FC = () => {
  return (
    <Container>
      <img
        src="/assets/case-study.png"
        alt="Case Study"
        className="icon-img mb-3"
      />
      <h2 className="fw-bold text-muted">Case Study</h2>
    </Container>
  );
};

export default CaseStudy;