import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import About from "./components/About";
import Container3 from "./components/Container3";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <NavbarComponent />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property" element={<Container3 />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
