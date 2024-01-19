import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

const LogoutForm = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Button
        style={{ borderRadius: "50px", width: "90px", height: "50px" }}
        onClick={
          () => logout({ returnTo: window.location.origin }) // 'logoutParams' is not needed
        }
        variant="text" // Optional: Set the button variant (contained/outlined/text)
        color="primary" // Optional: Set the button color (primary/secondary/default)
      >
        Log Out
      </Button>
    )
  );
};

export default LogoutForm;
