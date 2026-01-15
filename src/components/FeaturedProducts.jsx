import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function FeaturedProducts() {
  return (
    <Box sx={{ py: 8, background: "#f9fafb" }}>
      <Typography variant="h4" fontWeight={700} textAlign="center" mb={5}>
        Featured Products
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 4,
          maxWidth: 1200,
          mx: "auto",
          px: 2,
        }}
      >
        {products.slice(0, 3).map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
          >
            <Card
              sx={{
                borderRadius: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              }}
            >
              {/* IMAGE CENTER FIX */}
              <Box
                sx={{
                  width: "100%",
                  height: 220,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
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

              <CardContent>
                <Typography variant="h6" fontWeight={600}>
                  {product.title}
                </Typography>

                <Typography sx={{ opacity: 0.7, mb: 2 }}>
                  ${product.price}
                </Typography>

                <Button
                  component={Link}
                  to={`/products/${product.id}`}
                  variant="contained"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
