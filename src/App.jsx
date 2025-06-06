import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

// Dark Theme
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b3b3b3",
    },
    divider: "#333333",
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.background.default,
        }}
      >
        {/* Header */}
        <Header />

        {/* Main Content */}
        <MainContent />

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
