import React from "react";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#000000", color: "#fff", padding: "10px" }}
    >
      <Container maxWidth="lg">
        <Typography align="center" gutterBottom>
          Realty King ~ Your Trusted Partner in Real Estate
        </Typography>

        <Typography
          variant="body2"
          align="center"
          color="inherit"
          style={{ marginTop: "2px" }}
        >
          © {new Date().getFullYear()} Realty King. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
