// Services.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  const servicesData = [
    {
      title: 'Property Listings',
      description: 'Explore a wide range of properties available for sale or rent.',
    },
    {
      title: 'Home Valuation',
      description: 'Get an estimate of your property\'s current market value.',
    },
    {
      title: 'Real Estate Consultation',
      description: 'Expert advice and guidance for your real estate decisions.',
    },
    // Add more services as needed
  ];

  return (
    <Container className="mt-5">
      <h2>Our Services</h2>
      <Row className="mt-4">
        {servicesData.map((service, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
