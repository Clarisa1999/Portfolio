import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GitHub, YouTube } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function contact() {
  return (
    <Box
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
        <Typography variant="h1" textAlign="center" color="text.primary">
          I'd love to hear from you!
        </Typography>
        <Typography variant="h2" textAlign="center" color="text.primary">
          Got a project you would like me to work on? How about a friendly chat...
        </Typography>
      </Box>

      <Box>
        <Typography variant="h4" textAlign="center" color="text.primary">
          Say Hello
        </Typography>
        <Typography variant="h5" textAlign="center" color="text.primary">
          rufaro.gapare@mail.mcgill.ca
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          gap: "150px",
        }}
      >
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
      </Box>
    </Box>
  );
}
