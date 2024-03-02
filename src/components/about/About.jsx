import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import AboutDeskTop from "../about/AboutDesktop";
import AboutMobile from "../about/AboutMobile";

const About = () => {
  const themeMui = useTheme();
  const isSmallScreen = useMediaQuery(themeMui.breakpoints.down("md"));

  return <>{isSmallScreen ? <AboutMobile /> : <AboutDeskTop />}</>;
};

export default About;
