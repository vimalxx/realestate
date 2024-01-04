import React from "react";
import Container2 from "./Container2";
import Container1 from "./Container1";
import Container4 from "./Container4";
import Container5 from "./Container5";

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
        <Container4 />
      </section>
      <section className="about-us">
        <Container5 />
      </section>
    </div>
  );
};
export default Home;
