import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [open, setOpen] = useState(false);

  if (!product) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h5">Product not found</Typography>
        <Button component={Link} to="/products" sx={{ mt: 3 }}>
          Back to Products
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 6, background: "#f9fafb", minHeight: "100vh" }}>
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Paper sx={{ borderRadius: 3, overflow: "hidden" }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", maxHeight: 400, objectFit: "cover" }}
            />
          </Paper>

          <Box>
            <Typography variant="h4" fontWeight={700}>
              {product.title}
            </Typography>

            <Typography variant="h5" color="primary" sx={{ my: 2 }}>
              ${product.price}
            </Typography>

            <Typography sx={{ opacity: 0.8, mb: 3 }}>
              {product.description}
            </Typography>

            <Typography variant="h6" fontWeight={600} mb={1}>
              Features
            </Typography>

            <List>
              {product.features.map((feature, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemText primary={`• ${feature}`} />
                </ListItem>
              ))}
            </List>

            <Stack direction="row" spacing={2} mt={3}>
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  addToCart(product);
                  setOpen(true);
                }}
              >
                Add to Cart
              </Button>

              <Button component={Link} to="/products" variant="outlined">
                Back
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
              >
                <Alert severity="success" sx={{ width: "100%" }}>
                  Added to cart
                </Alert>
              </Snackbar>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
