// AboutUs.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{
        backgroundImage:
          'url("https://static.vecteezy.com/system/resources/previews/008/311/935/non_2x/the-illustration-graphic-consists-of-abstract-background-with-a-blue-gradient-dynamic-shapes-composition-eps10-perfect-for-presentation-background-website-landing-page-wallpaper-vector.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        color: "white",
        fontSize: "20px",
      }}
    >
      <Row className="justify-content-center">
        <Col md={10} className="text-center">
          <h2>About Us</h2>
          <br />
          <p>
            Welcome to Realty King – Your Trusted Partner in Real Estate. At
            Realty King, we believe in the transformative power of real estate.
            Guided by a commitment to integrity, professionalism, and client
            satisfaction, we have emerged as a beacon in the dynamic landscape
            of property dealings.
          </p>
          <p>
            Our mission is simple – to provide exceptional real estate services
            that go beyond transactions. We strive to create lasting
            relationships with our clients, ensuring their journey in the real
            estate market is not only successful but also enjoyable.
          </p>
          <p>
            What sets us apart? Expertise, personalized approach, and
            transparency. Backed by a team of seasoned real estate
            professionals, we bring a wealth of industry knowledge and expertise
            to every transaction. Whether you are buying, selling, or investing,
            our team is dedicated to ensuring a smooth and rewarding experience.
          </p>
          <p>
            At Realty King, we understand that every client is unique. We take
            the time to listen to your goals and tailor our services to meet
            your individual needs. Your satisfaction is our priority, and we are
            committed to delivering personalized solutions that exceed your
            expectations.
          </p>
          <p>
            We believe in transparency throughout the real estate process. From
            property evaluations to negotiations and closing, we keep you
            informed at every step. Our goal is to empower you with the
            knowledge and confidence needed to make informed decisions.
          </p>
          <p>
            Our team of real estate professionals is the heart of Realty King.
            Comprising dedicated agents, skilled negotiators, and industry
            experts, our team is committed to providing unparalleled service. We
            work collaboratively to ensure that our clients receive
            comprehensive support, whether they are first-time homebuyers or
            experienced investors.
          </p>
        </Col>
        <Col md={4}>
          {/* You can add an image or additional content here */}
        </Col>
      </Row>
    </Container>
  );
};

export default About;
