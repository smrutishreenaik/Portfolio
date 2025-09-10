import React, { useRef } from 'react'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutAndExperience from './pages/AboutAndExperience';
import ProjectAndCaseStudy from "./pages/ProjectAndCaseStudy"
import Footer from './components/Footer';
import { Container, Nav, Navbar } from 'react-bootstrap';

const App: React.FC = () => {

  const homeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand onClick={() => handleScroll(homeRef)}>My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => handleScroll(homeRef)}>Home</Nav.Link>
              <Nav.Link onClick={() => handleScroll(experienceRef)}>About</Nav.Link>
              <Nav.Link onClick={() => handleScroll(experienceRef)}>Experience</Nav.Link>
              <Nav.Link onClick={() => handleScroll(projectsRef)}>Projects</Nav.Link>
              <Nav.Link onClick={() => handleScroll(projectsRef)}>Case Study</Nav.Link>
              <Nav.Link onClick={() => handleScroll(contactRef)}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div ref={homeRef} className="vh-100 d-flex align-items-center justify-content-center">
        <Home/>
      </div>

      <div ref={experienceRef} className="vh-100 d-flex align-items-center justify-content-center">
        <AboutAndExperience />
      </div>

      <div ref={projectsRef} className="vh-100 d-flex align-items-center justify-content-center">
        <ProjectAndCaseStudy />
      </div>

      <div ref={contactRef} className="vh-100 d-flex align-items-center justify-content-center">
        <Contact />
      </div>

      <Footer/>
    </>
  );
};

export default App;
