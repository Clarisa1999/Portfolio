import React from "react";
import "./landingPage.css";
import myImage from "../../media-files/myImage.JPG";
import { GitHub, YouTube } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Stack, Typography } from "@mui/material";

const landingPage = () => {
  return (
    <Box className="landing" sx={{ paddingTop: 24, paddingBottom: 36 }}>
      <Stack sx={{ paddingTop: 8, paddingLeft: 8, flex: 0.73 }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Hie, My name is Rufaro Clarisa Gapare.....
        </Typography>
        <Typography variant="h3" sx={{ marginBottom: 2 }}>
          I am a Frontend Developer
        </Typography>
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

      {/* <div className="icons">
        <div id="empty"></div>
        <div className="rightSide">
          <div id="sayHello">
            <h3 id="hello"> Say Hello</h3>
            <h3 id="email"> rufaro.gapare@mail.mcgill.ca</h3>
          </div>
          <div id="iconsContainer">
            <LinkedInIcon
              sx={{
                color: "blue",
                display: "inline",
                fontSize: 60,
              }}
            ></LinkedInIcon>
            <GitHub
              sx={{
                color: "black",
                display: "inline",
                fontSize: 60,
              }}
            ></GitHub>
            <YouTube
              sx={{
                color: "red",
                display: "inline",
                fontSize: 60,
              }}
            ></YouTube>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br> */}
    </Box>
  );
};

export default landingPage;
