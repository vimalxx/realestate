import React from "react";
import { Container, Button, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Container4 = () => {
  const containerStyle = {
    backgroundImage:
      'url("https://img.freepik.com/free-vector/blank-blue-halftone-background-vector_53876-144364.jpg?t=st=1704306989~exp=1704307589~hmac=03e906a724d5b5de476c9798ff7333bd9145cf5088ae55bc81b5b9e5644fa7bb")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "30px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Add your search logic here
  };

  return (
    <Container fluid className="my-container" style={containerStyle}>
      <h2>Find Your Perfect Home</h2>
      <p>
        Use our advanced search to discover properties based on your criteria.
      </p>
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter city or neighborhood" />
        </Form.Group>
        <Form.Group controlId="propertyType">
          <Form.Label>Property Type</Form.Label>
          <Form.Control as="select">
            <option>Any</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Condo</option>
            {/* Add more property types as needed */}
          </Form.Control>
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
    </Container>
  );
};

export default Container4;
