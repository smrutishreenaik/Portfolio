import React from 'react'
import { Container } from 'react-bootstrap';

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
    logo: "/assets/company1.png",
  },
  {
    role: "Full Stack Developer",
    company: "ENSTOA",
    duration: "Nov 2023 – Feb 2025",
    logo: "/assets/company2.png",
  },
  {
    role: "Junior Software Engineer",
    company: "EPAM",
    duration: "May 2022 – Nov 2023",
    logo: "/assets/company3.png",
  },
];

const Experience: React.FC = () => {
  return (
    <Container>
      <div className="d-flex align-items-center mb-4">
        <img
          src="/assets/experience-img.png"
          alt="Experience"
          width={70}
          className="me-3"
        />
        <h1>
          My <span className="text-muted">Past</span> <br />
          Work Experience
        </h1>
      </div>

      <div>
        {timeline.map((item, index) => (
          <div key={index} className="d-flex align-items-center mb-4">
            <img
              src={item.logo}
              alt={item.company}
              width={40}
              height={40}
              className="me-3"
            />
            <div>
              <h5 className="mb-1">{item.role}</h5>
              <p className="mb-0 text-muted">
                {item.company}, {item.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Experience;