import React from "react";
import "./landingPage.css";
import myImage from "../../media-files/myImage.JPG";
import { Box, Stack, Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <Box
      component="div"
      id="landing"
      sx={{
        display: "flex",
        paddingTop: 24,
        minWidth: "100%",
        height: "77vh",
        background: (theme) =>
          theme.palette.mode === "light"
            ? "linear-gradient(90deg, #e4f2f4 70%, #62eb31 30%)"
            : theme.palette.background.paper,
        lineHeight: 1.7,
      }}
    >
      <Stack sx={{ paddingLeft: 8, flex: 0.73 }}>
        <Typography variant="h5" color="text.primary">
          Hi there, my name is
        </Typography>
        <Typography
          variant="h3"
          color="text.primary"
          sx={{ paddingTop: 5, fontWeight: "bold" }}
        >
          Rufaro Clarisa Gapare
        </Typography>
        <Typography
          variant="h3"
          sx={{
            paddingTop: 5,
            color: (theme) => (theme.palette.mode === "light" ? "#62eb31" : "white"),
          }}
        >
          I am a Front-end Developer....
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          width="74%"
          sx={{ paddingTop: 5 }}
        >
          I am a software engineer passionate about crafting scalable front-end products
          with great user experience that create a positive impact in the community! I am
          currently looking for new-grad opportunities.
        </Typography>
      </Stack>
      <Stack>
        <img id="image" src={myImage} height={300} width={300} />
      </Stack>
    </Box>
  );
};

export default LandingPage;
