import React from "react";
import {
  Container,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

const Container4 = () => {
  const containerStyle = {
    backgroundImage:
      'url("https://img.freepik.com/free-vector/blank-blue-halftone-background-vector_53876-144364.jpg?t=st=1704306989~exp=1704307589~hmac=03e906a724d5b5de476c9798ff7333bd9145cf5088ae55bc81b5b9e5644fa7bb")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "30px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Add your search logic here
  };

  return (
    <Container maxWidth="md" className="my-container" style={containerStyle}>
      <h2>Find Your Perfect Home</h2>
      <p>
        Use our advanced search to discover properties based on your criteria.
      </p>
      <form onSubmit={handleSearch}>
        <TextField
          fullWidth
          id="location"
          label="Location"
          variant="outlined"
          margin="normal"
          placeholder="Enter city or neighborhood"
        />
        <FormControl fullWidth variant="outlined" margin="normal">
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          style={{ marginTop: 20 }}
        >
          Search
        </Button>
      </form>
    </Container>
  );
};

export default Container4;
