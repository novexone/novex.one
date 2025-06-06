import React from "react";
import { Box, Typography, CircularProgress, useTheme } from "@mui/material";

const MainContent = () => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        gap: 3,
      }}
    >
      {/* NOVEX ONE */}
      <Typography
        variant="h6"
        component="h1"
        sx={{
          fontWeight: 300,
          letterSpacing: "0.1em",
          color: theme.palette.text.primary,
          fontFamily: '"Roboto Mono", "Roboto", monospace',
          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "3.5rem" },
          mb: 2,
        }}
      >
        NOVEX ONE
      </Typography>

      {/* Website Under Development */}
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: 300,
          color: theme.palette.text.primary,
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
          letterSpacing: "0.02em",
        }}
      >
        Website Under Development
      </Typography>

      {/* Loading Circle */}
      <CircularProgress
        size={32}
        thickness={2}
        sx={{
          color: theme.palette.text.primary,
          opacity: 0.8,
        }}
      />
    </Box>
  );
};

export default MainContent;
