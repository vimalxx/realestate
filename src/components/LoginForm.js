import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

const LoginForm = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button
        onClick={() => loginWithRedirect()}
        style={{ borderRadius: "50px", width: "90px", height: "50px" }}
        variant="text" // Optional: Set the button variant (contained/outlined/text)
        color="primary" // Optional: Set the button color (primary/secondary/default)
      >
        Log In
      </Button>
    )
  );
};

export default LoginForm;
