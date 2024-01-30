import React from "react";
import Container2 from "./Container2";
import Container1 from "./Container1";
import Container4 from "./Container4";
import Container5 from "./Container5";
import Footer from "./Footer";
import { CssBaseline, Container, Paper, Grid } from "@mui/material";

const Home = () => {
  const pageStyle = {
    backgroundColor: "gray", // Set your desired gray color
  };

  return (
    <div style={pageStyle}>
      <CssBaseline />
      <section className="hero-section">
        <Container1 />
      </section>
      <section className="featured-listings">
        <Container2 />
      </section>
      <section className="search-section">
        <Container maxWidth="md" component="main">
          <Paper
            elevation={3}
            sx={{
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
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Container5 />
            </Grid>
          </Grid>
        </Container>
      </section>
  <br />
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
