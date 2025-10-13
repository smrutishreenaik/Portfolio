import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutAndExperience from './pages/AboutAndExperience';
import ProjectAndCaseStudy from "./pages/ProjectAndCaseStudy"
import Footer from './components/Footer';
import Testimonials from './pages/Testimonials';
import PortfolioNavbar from './components/PortfolioNavbar';

const handleNavClick = (targetId: string, sectionId?: string) => {
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        if (sectionId) {
            setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) {
                    el.classList.add("shake");
                    setTimeout(() => el.classList.remove("shake"), 500);
                }
            }, 400);
        }
    };


const App: React.FC = () => {

  return (
    <>
      <PortfolioNavbar handleNavClick={handleNavClick}/>
      <div id="home" className="no-vh-100 d-flex align-items-center justify-content-center home-ctn">
        <Home />
      </div>

      <div id="aboutAndExperience" className="no-vh-100 d-flex align-items-center justify-content-center">
        <AboutAndExperience  handleNavClick={handleNavClick}/>
      </div>

      <div id="projectAndCaseStudy" className="no-vh-100 d-flex align-items-center justify-content-center">
        <ProjectAndCaseStudy />
      </div>

      <div id="testimonial" className="no-vh-100 d-flex align-items-center justify-content-center">
        <Testimonials />
      </div>

      <div id="contact" className="no-vh-100 d-flex align-items-center justify-content-center">
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default App;
