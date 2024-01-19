import React from "react";
import Container2 from "./Container2";
import Container1 from "./Container1";
import Container4 from "./Container4";
import Container5 from "./Container5";
import { CssBaseline, Container, Paper } from "@mui/material";

const Home = () => {
  return (
    <div>
      <CssBaseline />
      <section className="hero-section">
        <Container1 />
      </section>
      <section className="featured-listings">
        <Container2 />
      </section>
      <section className="search-section">
        <Container component="main" maxWidth="md">
          <Paper
            elevation={3}
            style={{
              padding: "20px",
              borderRadius: "8px",
              marginTop: "20px",
            }}
          >
            <Container4 />
          </Paper>
        </Container>
        <br />
      </section>
      <section className="about-us">
        <Container5 />
      </section>
    </div>
  );
};

export default Home;
