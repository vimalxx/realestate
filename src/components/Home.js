import React from "react";

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <h1>Welcome to Your Dream Home</h1>
        <p>Discover the perfect property that suits your lifestyle.</p>
        <button>Search Properties</button>
      </section>
      <section className="featured-listings">
        <h2>Featured Listings</h2>
        <div className="property-card">
          <img src="path/to/property1.jpg" alt="Property 1" />
          <h3>Modern City Apartment</h3>
          <p>2 Bed | 2 Bath | $500,000</p>
          <button>View Details</button>
        </div>
        <div className="property-card">
          <img src="path/to/property2.jpg" alt="Property 2" />
          <h3>Luxury Beachfront Villa</h3>
          <p>4 Bed | 3 Bath | $1,200,000</p>
          <button>View Details</button>
        </div>
        {/* Add more featured listings as needed */}
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
          Welcome to XYZ Real Estate, where we are dedicated to helping you find
          the perfect property. With years of experience in the real estate
          market, our team is committed to providing exceptional service and
          guiding you through every step of the process.
        </p>
        <button>Contact Us</button>
      </section>
    </div>
  );
};
export default Home;
