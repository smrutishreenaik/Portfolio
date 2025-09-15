import React, { useState } from 'react'
import { Container, Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import emailjs from "emailjs-com";
import ContactImg from "../assets/contactImg.png"
import type { RefObject } from 'react';

interface Props {
  contactRef: RefObject<HTMLDivElement | null>;
}

const Contact: React.FC<Props> = ({ contactRef: contactRef }) => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?? "";
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?? "";
  const userId = import.meta.env.VITE_EMAILJS_USER_ID?? "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: formData.firstName.trim() + " " + formData.lastName.trim(),
          email: formData.email,
          message: formData.message,
        },
        userId
      )
      .then(() => {
        setSuccess("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      })
      .catch(() => {
        setError("Failed to send message. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container ref={contactRef}>
      <Row className="align-items-center">
        <Col md={6}>
          <h2>Contact Me</h2>
          {success && <Alert variant="success">{success}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group className="mb-3 col-6" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "Send Message"}
            </Button>
          </Form>
        </Col>

        <Col md={6} className="text-center">
          <h2 className="fw-bold text-muted">Let&apos;s have a quick chat</h2>
          <img
            src={ContactImg}
            alt="quick chat"
            width={400}
            className="icon-img mb-3"
          />

        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
