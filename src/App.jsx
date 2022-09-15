import React, { useState } from "react";
import LandingPage from "./components/landing/LandingPage";
import About from "./components/about/About";
import WorkExperience from "./components/experience/WorkExperience";
import Navbar from "./components/navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import FullPageScroll from "./FullPageScroll";

/*Common Theme configuration for both dark and light mode */
const commonTheme = {
  typography: {
    fontSize: 15,
    fontFamily: [
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
  },
};

/*Light Theme configuration */
const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#62eb31", //lime
    },
    secondary: {
      main: "#e4f2f4", //background grey
    },
    background: {
      paper: "#ecfdff", //card grey
      default: "#e4f2f4", //backgroungd grey
    },
    text: {
      primary: "#4f4f4f", //text grey
      paper: "#62eb31", //lime
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
      main: "#0B1A3F",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      paper: "#001E3C",
      default: "#0A1929",
    },
    text: {
      primary: "#fff",
    },
  },
});

const App = () => {
  const [theme, setTheme] = useState("light");
  const globalTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={globalTheme}>
      <Navbar setTheme={setTheme} theme={theme} />
      <LandingPage />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
