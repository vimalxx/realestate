// Services.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  const servicesData = [
    {
      title: 'Property Listings',
      description: 'Browse our extensive list of available properties.',
      image: "im1.jpg",
    },
    {
      title: 'Home Valuation',
      description: 'Get a professional estimate of your property\'s value.',
      image: 'home-valuation.jpg',
    },
    {
      title: 'Real Estate Consultation',
      description: 'Speak with our experts for personalized advice.',
      image: 'consultation.jpg',
    },
  ];

  return (
    <Container className="justifyed mt-5" >
      <h2 className="text-center mb-4">Our Services</h2>
      <Row className="mt-4">
        {servicesData.map((service, index) => (
          <Col key={index} md={4} className="mb-4">
             <Card>
              <Card.Img variant="top" src={`C:/Users/student/Desktop/vimal/realestate/src/images${service.image}`} alt={service.title} />
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
