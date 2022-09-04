import React, { useState } from "react";
import LandingPage from "./components/landing/LandingPage";
import About from "./components/about/About";
import WorkExperience from "./components/experience/WorkExperience";
import Navbar from "./components/navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Projects from "./components/projects/Projects";

/*Common Theme configuration for both dark and light mode */
const commonTheme = {
  typography: {
    fontSize: 12,
  },
};

/*Light Theme configuration */
const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#62eb31",
    },
    secondary: {
      main: "#e4f2f4",
    },
    background: {
      paper: "#ecfdff",
      default: "#EEEEEE",
    },
    text: {
      primary: "#4f4f4f",
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
      <Navbar setThme={setTheme} theme={theme} />
      <LandingPage />
      <About />
      <WorkExperience />
      <Projects />
    </ThemeProvider>
  );
};

export default App;
