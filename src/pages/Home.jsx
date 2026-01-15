import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container sx={{ textAlign: "center", py: 10 }}>
      <Typography variant="h3" fontWeight="bold" mb={2}>
        Modern E‑Commerce Store
      </Typography>

      <Typography sx={{ mt: 2, mb: 4 }}>
        Browse products, explore categories, and enjoy a clean shopping UI.
      </Typography>

      <Button
        variant="contained"
        component={Link} // <-- Use Link for client-side routing
        to="/products"
        size="large"
      >
        Shop Now
      </Button>
    </Container>
  );
}
