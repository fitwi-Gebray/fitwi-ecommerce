import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Products() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        background: "linear-gradient(135deg, #f1f5f9, #e2e8f0)",
      }}
    >
      <Container maxWidth="lg">
        {/* Page Title */}
        <Typography variant="h4" fontWeight={700} textAlign="center" mb={6}>
          Our Products
        </Typography>

        {/* Products Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                background: "#ffffff",
                textAlign: "center",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
                },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  height: 220,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fff",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Content */}
              <CardContent>
                <Typography variant="h6" fontWeight={600} mb={1}>
                  {product.title}
                </Typography>

                <Typography sx={{ opacity: 0.7, mb: 2 }}>
                  ${product.price}
                </Typography>

                <Button
                  component={Link}
                  to={`/products/${product.id}`}
                  variant="contained"
                  fullWidth
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
