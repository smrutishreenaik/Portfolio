import React from 'react'
import { Container } from 'react-bootstrap';
import AmoutMeImg from "../assets/AmoutMeImg.png"
import ThreeDButton from './ThreeDButton';


const AboutMe: React.FC = () => {
  return (
    <>
      <Container>
        <img
          src={AmoutMeImg}
          alt="About Me"
          className="mb-3"
          width={100}
        />
        <h1>
          About <span className="text-muted">Me !</span>
        </h1>
        <p className="mt-3">
          As a Full-Stack Developer with expertise in C#, ASP.NET, and ReactJS,
          I specialize in building scalable and high-performing applications
          that enhance user experience.
        </p>
        <ThreeDButton label="Let&apos;s Talk"/>
      </Container>
    </>
  );
};

export default AboutMe;