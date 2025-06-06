import React from "react";
import { Typography, Box, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        p: 3,
        zIndex: 1000,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 400,
          letterSpacing: "0.1em",
          color: theme.palette.text.primary,
          fontFamily: '"Roboto Mono", "Roboto", monospace',
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
        }}
      >
        NOVEX ONE
      </Typography>
    </Box>
  );
};

export default Header;
