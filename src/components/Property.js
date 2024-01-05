// PropertyList.js

import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Property = ({ properties }) => {
  return (
    <Row xs={1} md={2} lg={3}>
      {properties.map((property) => (
        <Col key={property.id}>
          <Card
            style={{
              width: "50%",
              maxHeight: "100%",
              margin: "5px",
              padding: "0"
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
        </Col>
      ))}
    </Row>
  );
};

export default Property;
