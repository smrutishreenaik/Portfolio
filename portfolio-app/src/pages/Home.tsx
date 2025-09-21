import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProfileImg from "../assets/profilePic.jpeg"
import LinkedInLogo from "../assets/LinkedInLogo.png"
import GitHubLogo from "../assets/GitHubLogo.png"
import LeetCodeLogo from "../assets/LeetCodeLogo.png"
import ThreeDButton from '../components/ThreeDButton';
import LoopingVideo from '../components/LoopingVideo';

const Home: React.FC = () => {

  return (
    <Container>
      <LoopingVideo />
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <img
            src={ProfileImg}
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </Col>

        <Col md={8}>
          <p className="fs-2 helloIam">HELLO! I am</p>
          <h1 className="fw-bold display-1 archivo-black-regular">
            Smrutishree Naik
          </h1>
          <h3 className="fw-bold montserrat-regular">
            Full Stack Developer with 3+ years of experience building
          </h3>
          <h3 className="text-secondary fw-bold montserrat-regular">
            scalable, secure, and user-centric applications
          </h3>
          <div className="mt-2 row">
            <div className="col-1 mx-2" >
              <ThreeDButton label="Resume" onClick={() => window.open("https://your-resume-link.com", "_blank")} />
            </div>
            <div className="col-1 mx-2" >
              <ThreeDButton label="Email" onClick={() => window.location.href = "mailto:smrutishree.naik123@gmail.com"} />
            </div>
            <div className='col'>
              <span className='me-2'>
                <a
                  href="https://www.linkedin.com/in/smrutishreenaik/"
                  className="text-dark fs-3"
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
              </span>

              <span className='me-2'>
                <a
                  href="https://github.com/smrutishreenaik"
                  className="text-dark fs-3"
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
              </span>
              <span className='me-2'>
                <a
                  href="https://leetcode.com/u/smrutishreenaik/"
                  className="text-dark fs-3"
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
              </span>
            </div>

          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
