import React from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

const Services = () => {
  const servicesData = [
    {
      title: "Property Listings",
      description: "Browse our extensive list of available properties.",
      image: "im1.jpg",
    },
    {
      title: "Home Valuation",
      description: "Get a professional estimate of your property's value.",
      image: "im2.jpg",
    },
    {
      title: "Real Estate Consultation",
      description: "Speak with our experts for personalized advice.",
      image: "im3.jpg",
    },
  ];

  return (
    <div style={{ backgroundColor: "lightcoral", minHeight: "100vh" }}>
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "lightcoral",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 0",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          color="textPrimary"
          gutterBottom
        >
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center" className="mt-4">
          {servicesData.map((service, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card>
                <img
                  src={require(`/src/images/${service.image}`).default}
                  alt={service.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
