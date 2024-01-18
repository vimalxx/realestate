import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const PropertyList = ({ properties }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {properties.map((property) => (
        <Grid item key={property.id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={property.image}
              alt={property.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {property.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {property.description}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                Price: ${property.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyList;
