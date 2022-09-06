import React from "react";
import "./about.css";
import Container from "@mui/material/Container";
import { Box, Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      component="div"
      id="about"
      sx={{
        minWidth: "100%",
        height: "100vh",
        background: (theme) => theme.palette.primary.main,
        display: "flex",
      }}
    >
      <Box sx={{ alignSelf: "flex-start", padding: 20 }}>
        <Typography variant="h3" color="text.primary">
          About me
        </Typography>
        <Typography variant="body2" color="text.primary">
          Hie my name is Clarisa. I enjoy creating things that live on the internet. I am
          currently a senior at McGill University Studying Computer Science and Physics.
        </Typography>
      </Box>
      <Box sx={{ alignSelf: "flex-end", paddingBottom: 20 }}>
        <Typography variant="h3" color="text.primary">
          Things I do
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ paddingRight: 10 }}>
          Hie my name is Clarisa. I enjoy creating things that live on the internet. I am
          currently a senior at McGill University Studying Computer Science and Physics.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
