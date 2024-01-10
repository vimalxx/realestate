import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img
          src={user.picture}
          alt={user.name}
          style={{
            borderRadius: "45px",
            width: "40px",
            border: "1px solid white",
            margin: "0.5rem",
          }}
        />
        {/* <h2>{user.name}</h2>
        <p>{user.email}</p> */}
      </div>
    )
  );
};

export default Profile;
