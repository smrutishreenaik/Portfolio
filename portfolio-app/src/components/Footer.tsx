import { Container } from "react-bootstrap";
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container className="text-center">
        {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </Container>
    </footer>
  );
};

export default Footer;
