import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import WorkDesktop from "./WorkDesktop";
import WorkMobile from "./WorkMobile";

const WorkExperience = () => {
  const themeMui = useTheme();
  const isSmallScreen = useMediaQuery(themeMui.breakpoints.down("md"));

  return <>{isSmallScreen ? <WorkMobile /> : <WorkDesktop />}</>;
};

export default WorkExperience;
