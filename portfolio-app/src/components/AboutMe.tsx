import React from 'react'
import { Container } from 'react-bootstrap';
import ThreeDButton from './ThreeDButton';
import LoopingVideo from './LoopingVideo';
import AboutVideo from "../assets/AboutVideo.mp4"

const AboutMe: React.FC = () => {
  return (
    <>
      <Container className="text-start">
        <LoopingVideo videoSrc={AboutVideo} videoClassName='about-video' />
        <h1 className='fw-bold display-4'>
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