import React from "react";
import "./landingPage.css";
import myImage from "../../media-files/myImage.JPG";
import { Box, Stack, Typography } from "@mui/material";

const landingPage = () => {
  return (
    <Box
      className="landing"
      sx={{ display: "flex", paddingTop: 24, minWidth: "100%", height: "77vh" }}
    >
      <Stack sx={{ paddingTop: 8, paddingLeft: 8, flex: 0.73 }}>
        <Typography variant="h5">Hie, My name is Rufaro Clarisa Gapare.....</Typography>
        <Typography variant="h3">I am a Frontend Developer</Typography>
        <Typography variant="body1" fontSize={18}>
          I am passionate about crafting scalable frontend products with great
        </Typography>
        <Typography variant="body1" fontSize={18}>
          user experience that create a positive impact in the community!
        </Typography>
      </Stack>
      <Stack>
        <img id="image" src={myImage} height={300} width={300} />
      </Stack>
    </Box>
  );
};

export default landingPage;
