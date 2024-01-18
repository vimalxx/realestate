import React from "react";
import { Container, Typography } from "@mui/material";
import PropertyList from "./Property";

const Container3 = () => {
  // Sample data for properties
  const properties = [
    {
      id: 1,
      title: "Beautiful House",
      description:
        "A house with modern amenities. Lawn and garage are provided.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      price: 500000,
    },
    {
      id: 2,
      title: "Spacious Apartment",
      description: "An apartment with plenty of space and great views.",
      image:
        "https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 300000,
    },
    {
      id: 3,
      image:
        "https://www.home-designing.com/wp-content/uploads/2022/07/open-layout.jpg",
      title: "Modern City Apartments",
      description: "A modern city apartment with furniture.",
      price: 500000,
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/4508644/pexels-photo-4508644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Beachfront Villa",
      description: "2 Bed | 2 Bath | ",
      price: 500000,
    },
    {
      id: 5,
      image:
        "https://www.indiabullsrealestate.com/wp-content/uploads/2016/12/one-indiabulls-vadodara.jpg",
      title: "Commercial Property",
      description:
        "The Mall with 20 floors. Each floor contains more than 50 rooms.",
      price: 15000000,
    },
    {
      id: 6,
      title: "Beautiful House",
      description:
        "A house with modern amenities. Lawn and garage are provided.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      price: 500000,
    },
    {
      id: 7,
      title: "Spacious Apartment",
      description: "An apartment with plenty of space and great views.",
      image:
        "https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 300000,
    },
    {
      id: 8,
      image:
        "https://www.home-designing.com/wp-content/uploads/2022/07/open-layout.jpg",
      title: "Modern City Apartments",
      description: "A modern city apartment with furniture.",
      price: 500000,
    },
    {
      id: 9,
      image:
        "https://images.pexels.com/photos/4508644/pexels-photo-4508644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Beachfront Villa",
      description: "2 Bed | 2 Bath | ",
      price: 500000,
    },
    {
      id: 10,
      image:
        "https://www.indiabullsrealestate.com/wp-content/uploads/2016/12/one-indiabulls-vadodara.jpg",
      title: "Commercial Property",
      description:
        "The Mall with 20 floors. Each floor contains more than 50 rooms.",
      price: 15000000,
    },
    // Add more properties as needed
  ];

  return (
    <Container
      maxWidth="md"
      style={{
        backgroundImage:
          'url("https://static.vecteezy.com/system/resources/previews/008/023/852/non_2x/abstract-colorful-geometric-shape-background-modern-color-background-for-your-website-vector.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
      }}
    >
      <Typography variant="h2" style={{ margin: "1rem" }}>
        Property Listings
      </Typography>
      <PropertyList properties={properties} />
    </Container>
  );
};

export default Container3;
