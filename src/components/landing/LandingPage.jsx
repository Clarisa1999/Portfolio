import React from "react";
import "./landingPage.css";
import myImage from "../../media-files/myImage.JPG";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

const LandingPage = () => {
  const themeMui = useTheme();
  const isSmallScreen = useMediaQuery(themeMui.breakpoints.down("md"));

  return (
    <>
      {isSmallScreen ? (
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
              Hi there, my name is
            </Typography>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ paddingTop: 5, fontWeight: "bold" }}
            >
              Rufaro Clarisa Gapare
            </Typography>
            <Typography
              variant="h4"
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
              // width="74%"
              sx={{ paddingTop: 5, width: "70%" }}
            >
              I am a software engineer passionate about crafting scalable front-end
              products with great user experience that create a positive impact in the
              community!
            </Typography>
          </Stack>
          <Stack style={{ alignItems: "center", marginTop: "20px", marginBottom: "15%" }}>
            <img id="image" src={myImage} height={200} width={200} />
          </Stack>
        </Box>
      ) : (
        <Box
          component="div"
          id="landing"
          sx={{
            display: "flex",
            minHeight: "100vh",
            background: (theme) =>
              theme.palette.mode === "light"
                ? "linear-gradient(90deg, #e4f2f4 70%, #62eb31 30%)"
                : theme.palette.background.paper,
            lineHeight: 1.7,
          }}
        >
          <Stack sx={{ paddingLeft: 8, flex: 0.73, marginTop: "10%" }}>
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
              I am a software engineer passionate about crafting scalable front-end
              products with great user experience that create a positive impact in the
              community!
            </Typography>
          </Stack>
          <Stack sx={{ marginTop: "10%" }}>
            <img id="image" src={myImage} height={300} width={300} />
          </Stack>
        </Box>
      )}
    </>
  );
};

export default LandingPage;
