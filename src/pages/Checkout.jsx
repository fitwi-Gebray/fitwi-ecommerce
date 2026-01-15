import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  Divider,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { paymentOptions } from "../data/paymentOptions"; // CDN icons

export default function Checkout() {
  const { cart, totalPrice } = useCart();
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handlePlaceOrder = () => {
    if (!selectedPayment) {
      setSnackbarOpen(true);
      return;
    }
    // Optional: Clear cart here if desired
    navigate("/success");
  };

  return (
    <Box sx={{ py: 6, minHeight: "100vh", background: "#f1f5f9" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          Checkout
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Checkout Form */}
          <Paper
            sx={{
              flex: 2,
              p: 4,
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            }}
          >
            <Stack spacing={3}>
              <TextField label="Full Name" fullWidth required />
              <TextField label="Email" type="email" fullWidth required />
              <TextField label="Address" fullWidth required />
              <TextField label="Card Number" fullWidth required />

              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField label="Expiry Date" fullWidth required />
                <TextField label="CVV" fullWidth required />
              </Box>

              {/* Payment Options */}
              <Typography fontWeight={700}>Payment Method</Typography>
              <Stack direction="row" spacing={2}>
                {paymentOptions.map((pay) => (
                  <IconButton
                    key={pay.name}
                    onClick={() => setSelectedPayment(pay.name)}
                    sx={{
                      border:
                        selectedPayment === pay.name
                          ? "2px solid #0077b6"
                          : "1px solid #ddd",
                      borderRadius: 2,
                      p: 1,
                      transition: "0.3s",
                      "&:hover": { backgroundColor: "#f1f5f9" },
                    }}
                  >
                    <img
                      src={pay.icon}
                      alt={pay.name}
                      style={{ height: 32, width: "auto" }}
                    />
                  </IconButton>
                ))}
              </Stack>

              <Button
                variant="contained"
                size="large"
                sx={{ mt: 2 }}
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>
            </Stack>
          </Paper>

          {/* Order Summary */}
          <Paper
            sx={{
              flex: 1,
              p: 4,
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              background: "#ffffff",
              height: "fit-content",
            }}
          >
            <Typography variant="h6" fontWeight={700} mb={2}>
              Order Summary
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {cart.map((item) => (
              <Stack
                key={item.id}
                direction="row"
                justifyContent="space-between"
                mb={1}
              >
                <Typography sx={{ fontWeight: 500 }}>
                  {item.title} x {item.quantity}
                </Typography>
                <Typography>
                  ${(item.price * item.quantity).toFixed(2)}
                </Typography>
              </Stack>
            ))}

            <Divider sx={{ my: 2 }} />
            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight={700}>Total</Typography>
              <Typography fontWeight={700}>${totalPrice.toFixed(2)}</Typography>
            </Stack>
          </Paper>
        </Box>

        {/* Snackbar for missing payment */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
        >
          <Alert severity="warning" sx={{ width: "100%" }}>
            Please select a payment method
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
