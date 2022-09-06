import React from "react";
import "./workExperience.css";

import { Box, CardActionArea, Grid, Typography } from "@mui/material";
import image from "../../media-files/image.png";
import microsoft from "../../media-files/microsoft.png";
import firewox from "../../media-files/firewox.png";
import Expcard from "../expcard/Expcard";

const workExperience = () => {
  return (
    <Box
      component="div"
      id="experience"
      sx={{
        minWidth: "100%",
        height: "100vh",
        background: (theme) => theme.palette.background.paper,
        display: "flex",
      }}
    >
      {/* <Typography gutterBottom variant="h3" sx={{ padding: 10 }}>
        Work Experience
      </Typography> */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={6}
        sx={{ paddingTop: -20 }}
      >
        <Grid item xs={3}>
          <Expcard
            image={image}
            companyName="McGill Image"
            heading="Software Developer 09/2021-04/2022"
            experienceBody="Yourself could be a challenging task, but when it comes to:"
          />
        </Grid>
        <Grid item xs={3}>
          <Expcard
            image={microsoft}
            companyName="Microsoft"
            heading="Software Enginner Intern   05/2021-08/2021"
            experienceBody="Yourself could be a challenging task, but when i:"
          />
        </Grid>
        <Grid item xs={3}>
          <Expcard
            image={firewox}
            companyName="Firewox Technplogies Inc"
            heading="Software Developer Intern    06/2020-08/2020"
            experienceBody="Yourself could be a challenging task, but when it comes to an:"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default workExperience;
