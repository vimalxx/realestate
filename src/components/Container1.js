import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Container1 = () => {
  const containerStyle = {
    backgroundImage:
      'url("https://i.pinimg.com/564x/ab/ee/5d/abee5de497c94e2b24bd25bca404b0c2.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return (
    <Container fluid className="my-container" style={containerStyle}>
      <h1>Welcome to Your Dream Home</h1>
      <p>Discover the perfect property that suits your lifestyle.</p>
      <Link to={"/property"}>
        <Button>Search Properties</Button>
      </Link>
    </Container>
  );
};

export default Container1;
