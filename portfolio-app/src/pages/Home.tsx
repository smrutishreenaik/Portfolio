import React from 'react'
import { Container, Button, Row, Col } from "react-bootstrap";
import ProfileImg from "../assets/profilePic.jpeg"
import HomeImg from "../assets/HomeImg.png"
import LinkedInLogo from "../assets/LinkedInLogo.png"
import GitHubLogo from "../assets/GitHubLogo.png"
import LeetCodeLogo from "../assets/LeetCodeLogo.png"

const Home: React.FC = () => {

  return (
    <Container className="page">
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <img
            src={ProfileImg}
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </Col>

        <Col md={8}>
          <p className="fs-5 mb-1">HELLO! I am Smrutishree Naik</p>
          <h1 className="fw-bold display-5">
            Full Stack Developer with 3+ years of experience building
          </h1>
          <h2 className="text-secondary fw-bold">
            scalable, secure, and user-centric applications
          </h2>
          <img
            src={HomeImg}
            alt="quick chat"
            width={90}
            className="icon-img mb-3"
          />

          <div className="mt-4">
            <Button
              variant="dark"
              className="me-2"
              onClick={() => window.open("https://your-resume-link.com", "_blank")}
            >
              Resume
            </Button>

            <Button
              variant="dark"
              className="me-2"
              onClick={() => window.location.href = "mailto:smrutishree.naik123@gmail.com"}
            >
              Email
            </Button>

            <a
              href="https://www.linkedin.com/in/smrutishreenaik/"
              className="text-dark fs-3 me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LinkedInLogo}
                alt="LinkedIn"
                width="30"
                height="30"
                style={{ verticalAlign: "middle" }}
              />
            </a>

            <a
              href="https://github.com/smrutishreenaik"
              className="text-dark fs-3 me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GitHubLogo}
                alt="GitHub"
                width="30"
                height="30"
                style={{ verticalAlign: "middle" }}
              />
            </a>

            <a
              href="https://leetcode.com/u/smrutishreenaik/"
              className="text-dark fs-3 me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LeetCodeLogo}
                alt="LeetCode"
                width="30"
                height="30"
                style={{ verticalAlign: "middle" }}
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
