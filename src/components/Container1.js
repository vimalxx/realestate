import React from "react";
import { Container, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Container1 = () => {
  const containerStyle = {
    backgroundImage:
      'url("https://i.pinimg.com/564x/ab/ee/5d/abee5de497c94e2b24bd25bca404b0c2.jpg")',
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
  };

  return (
    <Container maxWidth="lg" className="my-container" style={containerStyle}>
      <Typography variant="h2" component="b" gutterBottom>
        Welcome to Your Dream Home
      </Typography>

      <Typography variant="h5" component="b" paragraph>
        Discover the perfect property that suits your lifestyle.
      </Typography>

      <Link to="/property" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Search Properties
        </Button>
      </Link>
    </Container>
  );
};

export default Container1;
