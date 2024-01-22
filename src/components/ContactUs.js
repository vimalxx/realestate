import React from "react";
import {
  Container,
  TextField,
  Button,
  Card,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/blank-blue-halftone-background-vector_53876-144364.jpg?t=st=1704880674~exp=1704881274~hmac=3181f0d643c6d725b352858f907f9adc8d25b418944e27bfff92ff2d6171f6a1")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Container maxWidth="md">
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h4" align="center" gutterBottom>
                Contact Us
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="formName"
                  label="Name"
                  type="text"
                  placeholder="Enter your name"
                  fullWidth
                  required
                  margin="normal"
                  autoComplete="name" // Set autoComplete to "name" for name field
                />
                <TextField
                  id="formEmail"
                  label="Email address"
                  type="email"
                  placeholder="Enter your email"
                  fullWidth
                  required
                  margin="normal"
                  autoComplete="email" // Set autoComplete to "email" for email field
                />
                <TextField
                  id="formMessage"
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Enter your message"
                  fullWidth
                  required
                  margin="normal"
                  autoComplete="message" // Set autoComplete to "message" for message field
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ marginTop: "1rem" }}
                >
                  Submit
                </Button>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
