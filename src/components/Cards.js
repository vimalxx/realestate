import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Cards = ({ imageSrc, title, content, buttonText }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: 2, width: "100%" }}>
      <img
        src={imageSrc}
        alt={title}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        <Link to="/property" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 10, width: "100%" }}
          >
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default Cards;
