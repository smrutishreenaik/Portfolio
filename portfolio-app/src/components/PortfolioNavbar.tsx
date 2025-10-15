import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

interface PortfolioProps {
    handleNavClick: (targetId: string, sectionId?: string) => void;
}

const PortfolioNavbar: React.FC<PortfolioProps> = ({ handleNavClick }) => {
    const [activeSection, setActiveSection] = useState("home");
    const [expanded, setExpanded] = useState(false);

    const handleNavItemClick = (targetId: string, sectionId?: string) => {
        handleNavClick(targetId, sectionId);
        if (window.innerWidth <= 480) {
            setTimeout(() => {
                setExpanded(false);
            }, 800);
        }
    };

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {

            if (window.innerWidth <= 480) {
                setActiveSection("");
                return;
            }

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    let currentSection = "home";
                    const sections = ["home", "aboutAndExperience", "projectAndCaseStudy", "testimonial", "contact"];

                    sections.forEach((id) => {
                        const section = document.getElementById(id);
                        if (section) {
                            const sectionTop = section.offsetTop - 80;
                            const sectionHeight = section.offsetHeight;
                            if (
                                window.scrollY >= sectionTop &&
                                window.scrollY < sectionTop + sectionHeight
                            ) {
                                currentSection = id;
                            }
                        }
                    });

                    setActiveSection(currentSection);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Navbar expand="lg" sticky="top" className="transparent-navbar" expanded={expanded}>
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link onClick={() => handleNavItemClick("home")} className={activeSection === "home" ? "active fw-bold" : ""}>Home</Nav.Link>
                    <Nav.Link onClick={() => handleNavItemClick("aboutAndExperience", "about-section")} className={activeSection === "aboutAndExperience" ? "active fw-bold" : ""}>About</Nav.Link>
                    <Nav.Link onClick={() => handleNavItemClick("aboutAndExperience", "experience-section")}>Experience</Nav.Link>
                    <Nav.Link onClick={() => handleNavItemClick("projectAndCaseStudy", "project-section")} className={activeSection === "projectAndCaseStudy" ? "active fw-bold" : ""}>Project</Nav.Link>
                    <Nav.Link onClick={() => handleNavItemClick("projectAndCaseStudy", "caseStudy-section")}>Case Study</Nav.Link>
                    <Nav.Link onClick={() => handleNavItemClick("testimonial")} className={activeSection === "testimonial" ? "active fw-bold" : ""}>Testimonial</Nav.Link>
                    <Nav.Link onClick={() => handleNavItemClick("contact")} className={activeSection === "contact" ? "active fw-bold" : ""}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default PortfolioNavbar;
