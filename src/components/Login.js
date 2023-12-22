// LoginPage.js
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Home from "./Home";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2>Login</h2>
          <br />
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <br />
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <br />
            <Link to="/">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
