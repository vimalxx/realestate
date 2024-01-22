import React from "react";
import {
  Container,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
} from "@mui/material";

const Container4 = () => {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontSize: "30px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Add your search logic here
  };

  return (
    <Container maxWidth="md" className="my-container" sx={containerStyle}>
      <h2>Find Your Perfect Home</h2>
      <p>
        Use our advanced search to discover properties based on your criteria.
      </p>
      <form onSubmit={handleSearch}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="location"
              label="Location"
              variant="outlined"
              placeholder="Enter city or neighborhood"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="propertyTypeLabel">Property Type</InputLabel>
              <Select
                label="Property Type"
                labelId="propertyTypeLabel"
                id="propertyType"
              >
                <MenuItem value="Any">Any</MenuItem>
                <MenuItem value="Apartment">Apartment</MenuItem>
                <MenuItem value="House">House</MenuItem>
                <MenuItem value="Condo">Condo</MenuItem>
                {/* Add more property types as needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Container4;
