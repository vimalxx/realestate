import React from "react";
import { Container, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Container5 = () => {
  const containerStyle = {
    backgroundImage:
      'url("https://img.freepik.com/free-vector/abstract-design-background-with-blue-purple-gradient_1048-13167.jpg?w=826&t=st=1704361805~exp=1704362405~hmac=c1526fc378e7e664880268f289cca17550b59efdcdc4cf5df151467f04d6cfc0")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "30px",
    color: "white",
  };

  return (
    <Container maxWidth="md" className="my-container" style={containerStyle}>
      <Typography variant="h2" component="h2" gutterBottom>
        About Our Real Estate Agency
      </Typography>
      <Typography variant="body1" component="p" paragraph>
        Welcome to Realty King, where we are dedicated to helping you find the
        perfect property. With years of experience in the real estate market,
        our team is committed to providing exceptional service and guiding you
        through every step of the process.
      </Typography>

      <Link to="/contact" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ marginTop: 20 }}
        >
          Contact Us
        </Button>
      </Link>
    </Container>
  );
};

export default Container5;
