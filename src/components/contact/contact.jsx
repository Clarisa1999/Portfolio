import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { GitHub, YouTube } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function contact() {
  return (
    <Box
      id="contact"
      sx={{
        minWidth: "100%",
        height: "100vh",
        background: (theme) => theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          padding: 20,
        }}
      >
        <Typography variant="h2" textAlign="center" color="text.primary">
          I'd love to hear from you!
        </Typography>
        <Typography variant="h5" textAlign="center" color="text.primary">
          Got a project you would like me to work on? How about a friendly chat...
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" textAlign="center" color="text.primary">
          Say Hello
        </Typography>
        <Link
          href="mailto:rufaro.gapare@mail.mcgill.ca"
          target="_blank"
          underline="always"
        >
          <Typography
            variant="h5"
            textAlign="center"
            color="text.paper"
            sx={{ fontStyle: "italic" }}
          >
            rufaro.gapare@mail.mcgill.ca
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-around",
          alignItems: "flex-end",
          gap: "150px",
        }}
      >
        <Link
          href="https://www.linkedin.com/in/rufaroclarisagapare/"
          target="_blank"
          underline="hover"
        >
          <LinkedInIcon
            sx={{
              color: (theme) => (theme.palette.mode === "light" ? "blue" : "white"),
              display: "inline",
              fontSize: 60,
            }}
          ></LinkedInIcon>
        </Link>

        <Link href="https://github.com/Clarisa1999" target="_blank" underline="hover">
          <GitHub
            sx={{
              color: (theme) => (theme.palette.mode === "light" ? "black" : "white"),
              display: "inline",
              fontSize: 60,
            }}
          ></GitHub>
        </Link>

        <Link href="https://youtu.be/awDLuwGDcoI" target="_blank" underline="hover">
          <YouTube
            sx={{
              color: (theme) => (theme.palette.mode === "light" ? "red" : "white"),
              display: "inline",
              fontSize: 60,
            }}
          ></YouTube>
        </Link>
      </Box>
    </Box>
  );
}
