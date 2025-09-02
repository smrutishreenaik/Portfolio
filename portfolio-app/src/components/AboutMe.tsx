import React from 'react'
import { Button, Container } from 'react-bootstrap';

const AboutMe: React.FC = () => {
  return (
    <>
      <Container>
        <img
          src="/assets/about-img.png"
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
        <Button variant="dark" className="mt-3 px-4 rounded-pill">
          Let&apos;s Talk
        </Button>
      </Container>
    </>
  );
};

export default AboutMe;