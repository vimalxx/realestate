// NavbarComponent.js
import React from "react";
import {
  Navbar,
  Nav
} from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Navbar.Brand as={Link} to="/" style={{ padding: "5px" }}>
      <img
          src="favicon_io/favicon.ico"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Your Logo"
        />
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
        <Nav.Link as={Link} to="/services">
          Services
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contact
        </Nav.Link>
      </Nav>
      <LoginForm />
    </Navbar>
  );
};

export default NavbarComponent;
