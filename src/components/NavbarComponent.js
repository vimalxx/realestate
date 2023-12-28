// NavbarComponent.js
import React from "react";
import {
  Navbar,
  Nav,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Navbar.Brand as={Link} to="/" style={{ padding: "10px" }}>
        REALTY KING
      </Navbar.Brand>
      <Nav className="ml-auto" style={{ fontWeight: "bold", color: "white" }}>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/property">
          Property
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contact
        </Nav.Link>
      </Nav>
      <ButtonToolbar>
        <ButtonGroup aria-label="First group">
          <Button
            as={Link}
            to="/login"
            variant="outline-light"
            style={{
              marginRight: "10px",
              borderRadius: "20px",
              borderColor: "lightgreen",
            }}
          >
            Login
          </Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Second group">
          <Button
            as={Link}
            to="/signup"
            variant="outline-light"
            style={{
              marginRight: "10px",
              borderRadius: "20px",
              borderColor: "lightgreen",
            }}
          >
            SIGN IN
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </Navbar>
  );
};

export default NavbarComponent;
