import React from "react";
import { Box, Container, Typography, Button, Stack, Chip } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
      }}
    >
      <Container maxWidth="md" sx={{ py: 10, textAlign: "center" }}>
        <Stack spacing={4} alignItems="center">
          <Chip
            label="New Season Collection"
            sx={{
              bgcolor: "rgba(255,255,255,0.15)",
              color: "white",
              fontWeight: 600,
            }}
          />
          <Typography variant="h2" fontWeight={800}>
            Modern E-Commerce
            <br />
            Shopping Experience
          </Typography>
          <Typography sx={{ maxWidth: 600, fontSize: "1.1rem", opacity: 0.9 }}>
            Discover premium products, explore categories, and enjoy a fast,
            clean, and secure shopping experience.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              size="large"
              variant="contained"
              startIcon={<ShoppingBagIcon />}
              href="/products"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 700,
                background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                "&:hover": {
                  background: "linear-gradient(90deg, #ff9a1f, #ff4f8b)",
                },
              }}
            >
              Shop Now
            </Button>
            <Button
              size="large"
              variant="outlined"
              startIcon={<LocalShippingIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 700,
                color: "white",
                borderColor: "rgba(255,255,255,0.5)",
                "&:hover": {
                  borderColor: "white",
                  background: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Free Shipping
            </Button>
          </Stack>
          <Typography sx={{ mt: 3, opacity: 0.75, fontSize: "0.9rem" }}>
            Trusted by 10,000+ customers · Secure checkout · Fast delivery
          </Typography>
        </Stack>
      </Container>
      <FeaturedProducts />
    </Box>
  );
}
