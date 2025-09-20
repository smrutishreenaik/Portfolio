import React, { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import type { RefObject } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  testimonialRef: RefObject<HTMLDivElement | null>;
}

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    feedback:
      "This portfolio is amazing. The attention to detail and design is outstanding!",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    feedback:
      "Working with you was a great experience. Professional, skilled, and reliable.",
  },
  {
    name: "Michael Lee",
    role: "UI/UX Designer",
    feedback:
      "I loved the creativity and responsiveness of the project. Highly recommended!",
  },
  {
    name: "Sophia Brown",
    role: "CTO",
    feedback:
      "Great problem-solving skills and technical expertise. Pleasure to collaborate!",
  },
];

const Testimonials: React.FC<Props> = ({ testimonialRef: testimonialRef }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <Container className="align-items-center">
      <Container className="testimonials-container text-center py-5" ref={testimonialRef}>
        <h2 className="mb-5">What People Say</h2>
        <div className="carousel-wrapper">
          {testimonials.map((testimonial, index) => {
            const offset = (index - activeIndex + testimonials.length) % testimonials.length;

            return (
              <Card
                key={index}
                className={`testimonial-card offset-${offset}`}
              >
                <Card.Body>
                  <Card.Text>&apos;{testimonial.feedback}&apos;</Card.Text>
                  <Card.Title className="mt-3">{testimonial.name}</Card.Title>
                  <Card.Subtitle className="text-muted">{testimonial.role}</Card.Subtitle>
                </Card.Body>
              </Card>
            );
          })}
        </div>

        <Row className="justify-content-center mt-4">
          <Col xs="auto">
            <Button variant="dark" onClick={prevTestimonial}>
              <IoIosArrowBack />
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="dark" onClick={nextTestimonial}>
              <IoIosArrowForward />
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Testimonials;
