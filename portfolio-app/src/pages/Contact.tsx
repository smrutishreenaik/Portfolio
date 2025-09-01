import React from 'react'
import { Container, Form, Button } from "react-bootstrap";
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <>
    <Container className="mt-5">
      <h2>Contact Me</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
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
    </Container>
    <Footer/>
    </>
  );
};

export default Contact;
