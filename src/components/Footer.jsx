// src/components/Footer.jsx
import React from "react";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { GitHub, Email } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Copyright Text */}
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.primary,
          fontFamily: '"Roboto Mono", "Roboto", monospace',
          fontSize: { xs: "0.75rem", sm: "0.875rem" },
          fontWeight: 300,
        }}
      >
        © 2025 All rights reserved
      </Typography>

      {/* Social Links */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <IconButton
          aria-label="Email"
          href="mailto:dev@novex.one"
          sx={{
            color: theme.palette.text.primary,
            "&:hover": {
              color: theme.palette.text.secondary,
            },
          }}
        >
          <Email fontSize="small" />
        </IconButton>

        <IconButton
          aria-label="GitHub"
          href="https://github.com/novexone"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: theme.palette.text.primary,
            "&:hover": {
              color: theme.palette.text.secondary,
            },
          }}
        >
          <GitHub fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
