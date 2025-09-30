import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

const NAV_ITEMS = [
    { key: "home", href: "home" },
    { key: "about", href: "about" },
    { key: "experience", href: "about" },
    { key: "project", href: "project" },
    { key: "case study", href: "project" },
    { key: "testimonial", href: "testimonial" },
    { key: "contact", href: "contact" },
];

const CustomNavbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    let currentSection = "home";
                    NAV_ITEMS.forEach((id) => {
                        const section = document.getElementById(id.href);
                        if (section) {
                            const sectionTop = section.offsetTop - 80;
                            const sectionHeight = section.offsetHeight;
                            if (
                                window.scrollY >= sectionTop &&
                                window.scrollY < sectionTop + sectionHeight
                            ) {
                                currentSection = id.href;
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
        <Navbar expand="lg" sticky="top" bg="light">
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto">
                    {NAV_ITEMS.map((item) => (
                        <Nav.Link
                            key={item.key}
                            href={`#${item.href}`}
                            aria-current={activeSection === item.href ? "page" : undefined}
                            className={activeSection === item.href ? "active fw-bold" : ""}
                        >
                            {item.key.charAt(0).toUpperCase() + item.key.slice(1)}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
