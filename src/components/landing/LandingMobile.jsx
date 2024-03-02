import React from "react";
import "./landingPage.css";
import myImage from "../../media-files/myImage.JPG";
import { Box, Stack, Typography } from "@mui/material";

const LandingMobile = () => {
  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: (theme) => theme.palette.background.paper,
          // "linear-gradient(90deg, #e4f2f4 70%, #62eb31 30%)"
          // lineHeight: 1.7,
        }}
      >
        <Stack style={{ paddingLeft: "10%", marginTop: "15%" }}>
          <Typography variant="h6" color="text.primary">
            Hi there,Iam
          </Typography>
          <Typography
            variant="h4"
            color="text.primary"
            sx={{ paddingTop: 5, fontWeight: "bold" }}
          >
            Rufaro Clarisa Gapare
          </Typography>
          {/* <Typography
              variant="h4"
              sx={{
                paddingTop: 5,
                color: (theme) => (theme.palette.mode === "light" ? "#62eb31" : "white"),
              }}
            >
              I am a Front-end Developer....
            </Typography> */}
          <Typography
            variant="body1"
            color="text.primary"
            // width="74%"
            sx={{ paddingTop: 5, width: "70%" }}
          >
            a dedicated Front-end Developer with a passion for engineering scalable,
            user-centric products. My mission is to create compelling front-end solutions
            that not only deliver an exceptional user experience but also leave a positive
            impact on the community. Welcome to my portfolio — where innovation meets
            purpose!
          </Typography>
        </Stack>
        <Stack style={{ alignItems: "center", marginTop: "20px", marginBottom: "15%" }}>
          <img id="image" src={myImage} height={200} width={200} />
        </Stack>
      </Box>
    </>
  );
};

export default LandingMobile;
