import React from "react";
import { Container, Grid } from "@mui/material";
import Cards from "./Cards";

const CardGroup = () => {
  const cardsData = [
    {
      id: 1,
      imageSrc:
        "https://www.home-designing.com/wp-content/uploads/2022/07/open-layout.jpg",
      title: "Modern City Apartments",
      content: "2 Bed | 2 Bath | $500,000",
      buttonText: "View Details",
    },
    {
      id: 2,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2AY8tBZ0AKMq5bay1gfv1Oi79d-WF2ObQg&usqp=CAU",
      title: "Beachfront Villa",
      content: "2 Bed | 2 Bath | $500,000",
      buttonText: "View Details",
    },
    {
      id: 3,
      imageSrc:
        "https://www.indiabullsrealestate.com/wp-content/uploads/2016/12/one-indiabulls-vadodara.jpg",
      title: "Commercial Property",
      content:
        "The Mall with 20 floors. Each floor contains more than 50 rooms.",
      buttonText: "View Details",
    },
    // Add more cards as needed
  ];

  const handleButtonClick = (id) => {
    // Handle button click logic
    console.log(`Button clicked for card with id ${id}`);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {cardsData.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Cards
              imageSrc={card.imageSrc}
              title={card.title}
              content={card.content}
              buttonText={card.buttonText}
              onButtonClick={() => handleButtonClick(card.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardGroup;
