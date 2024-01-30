import React from "react";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        background:
          "radial-gradient(circle at 50% 0%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)",
        color: "#fff",
        padding: "10px",
      }}
    >
      <Container maxWidth="lg">
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
