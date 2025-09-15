import React, { useRef } from 'react'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutAndExperience from './pages/AboutAndExperience';
import ProjectAndCaseStudy from "./pages/ProjectAndCaseStudy"
import Footer from './components/Footer';
import { Container, Nav, Navbar } from 'react-bootstrap';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const caseStudyRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const NAVBAR_HEIGHT = 220;
  const SHAKE_DELAY = 600;
  const EXTRA_PADDING = 10;

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
    const element = ref.current;
    if (!element) return;

    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementTop - NAVBAR_HEIGHT - EXTRA_PADDING;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    if(ref === homeRef || ref === contactRef) return;

    setTimeout(() => {
      triggerShake(element);
    }, SHAKE_DELAY);
  };

  const triggerShake = (element: HTMLElement) => {
    element.classList.remove("shake");
    void element.offsetWidth; 
    element.classList.add("shake");
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
              <Nav.Link onClick={() => handleScroll(aboutRef)}>About</Nav.Link>
              <Nav.Link onClick={() => handleScroll(experienceRef)}>Experience</Nav.Link>
              <Nav.Link onClick={() => handleScroll(projectsRef)}>Projects</Nav.Link>
              <Nav.Link onClick={() => handleScroll(caseStudyRef)}>Case Study</Nav.Link>
              <Nav.Link onClick={() => handleScroll(contactRef)}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div ref={homeRef} className="vh-100 d-flex align-items-center justify-content-center">
        <Home />
      </div>

      <div className="vh-100 d-flex align-items-center justify-content-center">
        <AboutAndExperience aboutRef={aboutRef} experienceRef={experienceRef} />
      </div>

      <div className="vh-100 d-flex align-items-center justify-content-center">
        <ProjectAndCaseStudy projectsRef={projectsRef} caseStudyRef={caseStudyRef} />
      </div>

      <div className="vh-100 d-flex align-items-center justify-content-center">
        <Contact contactRef={contactRef}/>
      </div>

      <Footer />
    </>
  );
};

export default App;
