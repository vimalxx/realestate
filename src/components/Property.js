// PropertyList.js

import React from "react";
import { Card } from "react-bootstrap";

const Property = ({ properties }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around"
    style={{}}>
      {properties.map((property) => (
        <Card
          key={property.id}
          className="mb-3"
          style={{
            width: "18rem",
            margin: "10px",
          }}
        >
          <Card.Img variant="top" src={property.image} />
          <Card.Body>
            <Card.Title>{property.title}</Card.Title>
            <Card.Text>{property.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Price: ${property.price}</small>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default Property;
