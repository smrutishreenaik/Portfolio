import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";


const CustomNavbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
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


    return (
        <Navbar expand="lg" sticky="top" bg="light">
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link onClick={() => handleNavClick("home")} className={activeSection === "home" ? "active fw-bold" : ""}>Home</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick("aboutAndExperience", "about-section")} className={activeSection === "aboutAndExperience" ? "active fw-bold" : ""}>About</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick("aboutAndExperience", "experience-section")}>Experience</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick("projectAndCaseStudy", "project-section")} className={activeSection === "projectAndCaseStudy" ? "active fw-bold" : ""}>Project</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick("projectAndCaseStudy", "caseStudy-section")}>Case Study</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick("testimonial")} className={activeSection === "testimonial" ? "active fw-bold" : ""}>Testimonial</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick("contact")} className={activeSection === "contact" ? "active fw-bold" : ""}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
