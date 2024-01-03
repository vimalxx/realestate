// ContactUs.js
import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container
      fluid
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "100px",
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        backgroundSize: "cover",
        color: "white",
        height: "100vh",
        justifyContent: "center",
        alignContent: "center"
      }}
    >
      <h2>Contact Us</h2>
      <Form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "700px",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>
        <br />
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>
        <br />
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            required
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
