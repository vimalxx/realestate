import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavbarComponent from "./components/NavbarComponent.js";
import About from "./components/About";
import Login from "./components/Login";
import SignupPage from "./components/Signup.js";
import Container3 from "./components/Container3.js";
import ContactUs from "./components/ContactUs.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/property" element={<Container3 />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
