import React, { useState } from "react";
import LandingPage from "./components/landing/LandingPage";
import About from "./components/about/About";
import WorkExperience from "./components/experience/WorkExperience";
import Navbar from "./components/navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Toolbar } from "@mui/material";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

/*Common Theme configuration for both dark and light mode */
const commonTheme = {
  typography: {
    fontSize: 15,
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: "-1px" },
    h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: "-0.5px" },
    h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: "-0.5px" },
    h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, letterSpacing: "-0.3px" },
    h5: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 999,
          fontWeight: 600,
          paddingLeft: 22,
          paddingRight: 22,
          paddingTop: 8,
          paddingBottom: 8,
          boxShadow: "none",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            boxShadow: "0 8px 20px rgba(16, 185, 129, 0.25)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
  },
};

/*Light Theme configuration */
const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#10b981", //emerald accent
      dark: "#059669",
    },
    secondary: {
      main: "#0f766e", //deep teal
    },
    background: {
      paper: "#ffffff", //cards
      default: "#eef2f1", //soft neutral section tint
      accent: "#d1fae5", //light emerald section tint
    },
    text: {
      primary: "#1f2937", //slate
      secondary: "#4b5563",
      paper: "#10b981", //emerald
      third: "#FFFFFF",
    },
  },
});

/*Dark Theme configuration */
const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#34d399", //emerald accent (lighter for dark bg)
      dark: "#10b981",
    },
    secondary: {
      main: "#5eead4", //teal
    },
    background: {
      paper: "#0f2942", //cards
      default: "#0A1929", //section background
      accent: "#0d3b2e", //dark emerald section tint
    },
    text: {
      primary: "#fff",
      secondary: "#cbd5e1",
    },
  },
});

const App = () => {
  const [theme, setTheme] = useState("light");
  const globalTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={globalTheme}>
      <Navbar setTheme={setTheme} theme={theme} />
      <Toolbar />
      <LandingPage />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
