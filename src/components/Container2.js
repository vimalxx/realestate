import React from "react";
import { Container, Button } from "react-bootstrap";

import CardGroup from "./CardGroup";

const Container1 = () => {
  const containerStyle = {
    backgroundImage: "URL("images/bg2.jpg")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <Container fluid className="my-container" style={containerStyle}>
      <h2>Featured Listings</h2>
      <div className="property-card">
        <CardGroup />
      </div>
    </Container>
  );
};

export default Container1;
