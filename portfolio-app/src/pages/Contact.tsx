import React, { useState } from 'react'
import { Container, Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import emailjs from "emailjs-com";
import LoopingVideo from '../components/LoopingVideo';
import ContactVideo from '../assets/ContactVideo.mp4';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
  const userId = import.meta.env.VITE_EMAILJS_USER_ID ?? "";

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
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          {success && <Alert variant="success">{success}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} className='contact-container'>
            <Row>
              <Form.Group className="mb-3 col-6" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
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
              />
            </Form.Group>
            <Button type="submit" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "Let's Talk"}
            </Button>
          </Form>
        </Col>

        <Col md={6} className="text-center">
          <h2 className="fw-bold display-5">Let&apos;s have a</h2>
          <h2 className="fw-bold text-muted display-5">Quick Chat</h2>
          <LoopingVideo videoSrc={ContactVideo} videoClassName='contact-video' />

        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
