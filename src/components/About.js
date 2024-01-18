// AboutUs.js

import React from "react";
import { Container, Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <Container
      sx={{
        backgroundImage:
          'url("https://static.vecteezy.com/system/resources/previews/008/311/935/non_2x/the-illustration-graphic-consists-of-abstract-background-with-a-blue-gradient-dynamic-shapes-composition-eps10-perfect-for-presentation-background-website-landing-page-wallpaper-vector.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        minWidth: "100%",
        color: "white",
        fontSize: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container justifyContent="center" spacing={4}>
        <Grid item md={8} xs={12} textAlign="center">
          <Typography variant="h2" align="center" gutterBottom>
            About Us
          </Typography>
          <Typography paragraph>
            Welcome to Realty King – Your Trusted Partner in Real Estate. At
            Realty King, we believe in the transformative power of real estate.
            Guided by a commitment to integrity, professionalism, and client
            satisfaction, we have emerged as a beacon in the dynamic landscape
            of property dealings.
          </Typography>
          <Typography paragraph>
            Our mission is simple – to provide exceptional real estate services
            that go beyond transactions. We strive to create lasting
            relationships with our clients, ensuring their journey in the real
            estate market is not only successful but also enjoyable.
          </Typography>
          <Typography paragraph>
            What sets us apart? Expertise, personalized approach, and
            transparency. Backed by a team of seasoned real estate
            professionals, we bring a wealth of industry knowledge and expertise
            to every transaction. Whether you are buying, selling, or investing,
            our team is dedicated to ensuring a smooth and rewarding experience.
          </Typography>
          <Typography paragraph>
            At Realty King, we understand that every client is unique. We take
            the time to listen to your goals and tailor our services to meet
            your individual needs. Your satisfaction is our priority, and we are
            committed to delivering personalized solutions that exceed your
            expectations.
          </Typography>
          <Typography paragraph>
            We believe in transparency throughout the real estate process. From
            property evaluations to negotiations and closing, we keep you
            informed at every step. Our goal is to empower you with the
            knowledge and confidence needed to make informed decisions.
          </Typography>
          <Typography paragraph>
            Our team of real estate professionals is the heart of Realty King.
            Comprising dedicated agents, skilled negotiators, and industry
            experts, our team is committed to providing unparalleled service. We
            work collaboratively to ensure that our clients receive
            comprehensive support, whether they are first-time homebuyers or
            experienced investors.
          </Typography>
          {/* ... (rest of the paragraphs) */}
        </Grid>
        <Grid item md={4} xs={12}>
          {/* You can add an image or additional content here */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
