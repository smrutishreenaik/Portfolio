import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutAndExperience from './pages/AboutAndExperience';
import ProjectAndCaseStudy from "./pages/ProjectAndCaseStudy"
import Footer from './components/Footer';
import Testimonials from './pages/Testimonials';
import CustomNavbar from './components/CustomNavbar';

const App: React.FC = () => {

  return (
    <>
      <CustomNavbar />
      <div id="home" className="vh-100 d-flex align-items-center justify-content-center">
        <Home />
      </div>

      <div id="aboutAndExperience" className="vh-100 d-flex align-items-center justify-content-center">
        <AboutAndExperience />
      </div>

      <div id="projectAndCaseStudy" className="vh-100 d-flex align-items-center justify-content-center">
        <ProjectAndCaseStudy />
      </div>

      <div id="testimonial" className="vh-100 d-flex align-items-center justify-content-center">
        <Testimonials />
      </div>

      <div id="contact" className="vh-100 d-flex align-items-center justify-content-center">
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default App;
