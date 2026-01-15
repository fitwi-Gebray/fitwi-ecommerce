import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Stack,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <Box sx={{ py: 6, minHeight: "100vh", background: "#f1f5f9" }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={700} mb={4}>
          Shopping Cart
        </Typography>

        {cart.length === 0 ? (
          <Typography>Your cart is empty.</Typography>
        ) : (
          <>
            {cart.map((item) => (
              <Paper
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 3,
                  p: 2,
                  borderRadius: 2,
                  background: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                {/* Product Info */}
                <Stack spacing={0.5}>
                  <Typography fontWeight={600}>{item.title}</Typography>
                  <Typography>${item.price.toFixed(2)}</Typography>
                </Stack>

                {/* Quantity Controls */}
                <Stack direction="row" spacing={1} alignItems="center">
                  <IconButton
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    disabled={item.quantity === 1}
                    sx={{
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      width: 36,
                      height: 36,
                      "&:hover": { backgroundColor: "#f1f5f9" },
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>

                  <Typography
                    sx={{
                      minWidth: 24,
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {item.quantity}
                  </Typography>

                  <IconButton
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    sx={{
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      width: 36,
                      height: 36,
                      "&:hover": { backgroundColor: "#f1f5f9" },
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>

                  {/* Remove */}
                  <IconButton
                    color="error"
                    sx={{
                      border: "1px solid #fca5a5",
                      borderRadius: "8px",
                      ml: 1,
                      "&:hover": { backgroundColor: "#fee2e2" },
                    }}
                    onClick={() => removeFromCart(item.id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Paper>
            ))}

            {/* Total */}
            <Typography variant="h5" fontWeight={700} mt={4}>
              Total: ${totalPrice.toFixed(2)}
            </Typography>

            <Button
              component={Link}
              to="/checkout"
              variant="contained"
              sx={{ mt: 3 }}
            >
              Proceed to Checkout
            </Button>
          </>
        )}
      </Container>
    </Box>
  );
}
