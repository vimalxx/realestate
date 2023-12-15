// import React from "react";
// import { NavLink } from "react-router-dom";
// // Navbar.js

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "transparent",
      }}
    >
      <div>
        <Link to="/" style={{ color: "#333", textDecoration: "none" }}>
          REALTY KING
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link
          to="/"
          style={{
            margin: "0 10px",
            color: "#333",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{ margin: "0 10px", color: "#333", textDecoration: "none" }}
        >
          About
        </Link>
        <Link
          to="/property"
          style={{ margin: "0 10px", color: "#333", textDecoration: "none" }}
        >
          Property
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
