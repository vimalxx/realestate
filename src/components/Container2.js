import React from "react";
import { Container } from "react-bootstrap";

import CardGroup from "./CardGroup";

const Container2 = () => {
  const containerStyle = {
    backgroundImage:
      'url("https://static.vecteezy.com/system/resources/previews/018/752/866/non_2x/abstract-background-design-background-texture-design-with-abstract-style-creative-illustration-for-advertising-posters-business-cards-flyers-websites-banners-covers-landings-pages-etc-free-vector.jpg")',
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
      <b>
        <h2 style={{ color: "white" }}>Featured Listings</h2>
      </b>
      <br />
      <div className="property-card">
        <CardGroup />
      </div>
    </Container>
  );
};

export default Container2;
