import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Avatar,
  Paper,
  Container,
  Typography,
  CircularProgress,
  Button,
  Alert,
} from "@mui/material";
import LogoutForm from "./LogoutForm";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Container
      component="main"
      maxWidth="md"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {isAuthenticated ? (
        <Paper
          elevation={3}
          style={{
            padding: "46px",
            borderRadius: "15px",
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            color: "black",
            backgroundColor: "beige",
          }}
        >
          <Avatar
            alt={user.name}
            src={user.picture}
            sx={{
              width: 90,
              height: 90,
              margin: "0 auto 16px",
            }}
          />
          {/* Additional profile information if needed */}
          <Typography variant="h5" component="div" gutterBottom>
            Hai! {user.name}
          </Typography>
          <Typography>
            <b>Email:</b> {user.email}
          </Typography>
          <Button>
            <LogoutForm />
          </Button>
        </Paper>
      ) : (
        <Alert severity="info" style={{ marginTop: "20px" }}>
          Please log in to view the profile page. 
        </Alert>
      )}
    </Container>
  );
};

export default Profile;
