import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

const NAV_ITEMS = ["home", "about", "project", "testimonial", "contact"];

const CustomNavbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "home";

            NAV_ITEMS.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const sectionTop = section.offsetTop - 80; // adjust navbar height
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
                            key={item}
                            href={`#${item}`}
                            className={activeSection === item ? "active fw-bold" : ""}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
