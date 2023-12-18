import React from "react";
import { Card, Button } from "react-bootstrap";

const Cards = ({ imageSrc, title, content, buttonText, onButtonClick }) => {
  return (
    <Card style={{ width: "18rem", display: "inline-flex", margin: "2px" }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
