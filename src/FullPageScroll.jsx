import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import { display, height, width } from "@mui/system";
import LandingPage from "./components/landing/LandingPage";
import About from "./components/about/About";
import WorkExperience from "./components/experience/WorkExperience";
import Navbar from "./components/navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

export default function FullPageScroll() {
  const SectionStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection sytle={SectionStyle}>
          <LandingPage />
        </FullpageSection>
        <FullpageSection sytle={SectionStyle}>
          <About />
        </FullpageSection>
        <FullpageSection styles={SectionStyle}>
          <WorkExperience />
        </FullpageSection>
        <FullpageSection styles={SectionStyle}>
          <Projects />
        </FullpageSection>
        <FullpageSection styles={SectionStyle}>
          <Contact />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}
