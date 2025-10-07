import React from 'react'
import { Container } from 'react-bootstrap';
import PastExpImg from "../assets/PastExpImg.png"
import LoopingVideo from './LoopingVideo';
import ExpVideo from '../assets/ExpVideo.mp4'

interface TimelineItem {
  role: string;
  company: string;
  duration: string;
  logo: string;
}

const timeline: TimelineItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Mindfire Solutions",
    duration: "Apr 2025 – Present",
    logo: PastExpImg,
  },
  {
    role: "Full Stack Developer",
    company: "ENSTOA",
    duration: "Nov 2023 – Feb 2025",
    logo: PastExpImg,
  },
  {
    role: "Junior Software Engineer",
    company: "EPAM",
    duration: "May 2022 – Nov 2023",
    logo: PastExpImg,
  },
];

const Experience: React.FC = () => {
  return (
    <Container>
      <LoopingVideo videoSrc={ExpVideo} videoClassName='exp-video' />
      <div className="d-flex text-start mb-4">
        <h1 className='fw-bold display-5 mx-auto'>
          <span className="text-muted">My Past</span> <br />
          Work Experience
        </h1>
      </div>

      <div className='d-flex flex-column'>
        {timeline.map((item, index) => (
          <div key={index} className='d-flex mx-auto mb-4'>
            <div className="d-flex">
              <img
                src={item.logo}
                alt={item.company}
                width={40}
                height={40}
                className="me-3 circular-img"
              />
              <div className='text-start exp-ctn'>
                <h5 className="mb-1">{item.role}</h5>
                <p className="mb-0 text-muted">
                  {item.company}, {item.duration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Experience;