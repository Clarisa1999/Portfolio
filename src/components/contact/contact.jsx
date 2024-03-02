import { useMediaQuery, useTheme } from "@mui/material";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

//export default function Contact() {

import React from "react";
import ContactMobile from "./ContactMobile";
import ContactDesktop from "./ContactDesktop";

const Contact = () => {
  const themeMui = useTheme();
  const isSmallScreen = useMediaQuery(themeMui.breakpoints.down("md"));

  return <>{isSmallScreen ? <ContactMobile /> : <ContactDesktop />}</>;
};

export default Contact;
