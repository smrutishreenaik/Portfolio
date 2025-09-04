import React from 'react'
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Contact: React.FC = () => {
  return (
    <Container className="page">
      <Row className="align-items-center">
        <Col md={6}>
          <h2>Contact Me</h2>
          <Form>
            <Row>
              <Form.Group className="mb-3 col-6">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3 col-6">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">Send</Button>
          </Form>
        </Col>

        <Col md={6} className="text-center">
          <h2 className="fw-bold text-muted">Let&apos;s have a quick chat</h2>
          <img
            src="/assets/case-study.png"
            alt="quick chat"
            className="icon-img mb-3"
          />

        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
