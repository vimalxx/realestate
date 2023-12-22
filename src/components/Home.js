import React from "react";
import Container2 from "./Container2";
import Container1 from "./Container1";

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <Container1 />
      </section>
      <section className="featured-listings">
        <Container2 />
      </section>
      <section className="search-section">
        <h2>Find Your Perfect Home</h2>
        <p>
          Use our advanced search to discover properties based on your criteria.
        </p>
        <form>
          <label>Location</label>
          <input type="text" placeholder="Enter city or neighborhood" />
          <label>Property Type</label>
          <select>
            <option>Any</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Condo</option>
            {/* Add more property types as needed */}
          </select>
          <button type="submit">Search</button>
        </form>
      </section>
      <section className="about-us">
        <h2>About Our Real Estate Agency</h2>
        <p>
          Welcome to Realty King, where we are dedicated to helping you find the
          perfect property. With years of experience in the real estate market,
          our team is committed to providing exceptional service and guiding you
          through every step of the process.
        </p>
        <button>Contact Us</button>
      </section>
    </div>
  );
};
export default Home;
