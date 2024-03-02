import React from "react";
import "./landingPage.css";
import { useMediaQuery, useTheme } from "@mui/material";
import LandingMobile from "./LandingMobile";
import LandingDesktop from "./LandingDesktop";

const LandingPage = () => {
  const themeMui = useTheme();
  const isSmallScreen = useMediaQuery(themeMui.breakpoints.down("md"));

  return <>{isSmallScreen ? <LandingMobile /> : <LandingDesktop />}</>;
};

export default LandingPage;
