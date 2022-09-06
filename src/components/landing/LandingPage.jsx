import React from "react";
import "./landingPage.css";
import myImage from "../../media-files/myImage.JPG";
import { Box, Stack, Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <Box
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
      <Stack sx={{ paddingTop: 8, paddingLeft: 8, flex: 0.73 }}>
        <Typography variant="h5" color="text.primary">
          Hie, my name is Rufaro Clarisa Gapare.....
        </Typography>
        <Typography variant="h3" color="text.primary" sx={{ paddingTop: 10 }}>
          I am a Frontend Developer
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          fontSize={18}
          sx={{ paddingTop: 5 }}
        >
          I am passionate about crafting scalable frontend products with great
        </Typography>
        <Typography variant="body1" color="text.primary" fontSize={18}>
          user experience that create a positive impact in the community!
        </Typography>
      </Stack>
      <Stack>
        <img id="image" src={myImage} height={300} width={300} />
      </Stack>
    </Box>
  );
};

export default LandingPage;
