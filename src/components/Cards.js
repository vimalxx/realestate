import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({ imageSrc, title, content, buttonText, onButtonClick }) => {
  return (
    <Card style={{ width: "18rem", display: "inline-flex", margin: "2px" }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Link to={"/property"}>
          <Button variant="primary">{buttonText}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Cards;
