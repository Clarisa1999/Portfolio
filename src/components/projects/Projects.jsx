import React from "react";
import Typography from "@mui/material/Typography";
import { padding } from "@mui/system";
import Eachpro from "../eachpro/Eachpro";
import { Box } from "@mui/material";

export default function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        background: (theme) => theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ width: "75%", alignSelf: "center", justifyContent: "center" }}>
        <Typography
          gutterBottom
          variant="h4"
          color="text.primary"
          textAlign={"center"}
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignSelf: "flex-start",
            flexDirection: "column",
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          Selected Projects...
        </Typography>
        {/* <Eachpro
          heading="McGill-spaces"
          body=" Currently, I am working on McGill-spaces. It is a web experience designed to promote interaction between various groups of students at McGill University. In this app, one can create an audio space where other students can join the conversation. This Idea was inspired
           by the live audio spaces section from Twitter spaces. This is a two people project being worked on a tech stack of React, Typescripte, Nodejs and Audio API's"
          link="https://github.com/saikz72/mcgill-spaces"
        /> */}
        <Eachpro
          heading="Image"
          body="Image is an accessibility project which uses rich audio (sonification) together with the sense of touch (haptics) to provide a faster and more nuanced experience of graphics on the web. 
          This will permit interpretation of maps, charts, and photographs, in which the visual experience
            is replaced with multimodal sensory feedback, rendered in a manner that helps overcome access barriers for users who are blind, deafblind, or partially sighted."
          link="https://image.a11y.mcgill.ca/"
        />
        <Eachpro
          heading="G-City "
          body="As a Software Engineer, I see every problem as an opportunity. I wanted to share the skills I attain from McGill University back to my home country In Zimbabwe. I developed an android application 
          where the community in my neighbourhood could directly communicate with respective City Council services. An application that the public can share information about the problems they are encountering, 
          from accumulating waste dump to water shortages. A platform where the City Council could directly communicate with the public and share schedules such as load-shedding,
           garbage pickups or water shutdown, so that the public can better prepare for these services. This app was launched in 2019 and is only compatible with android software."
          link="https://play.google.com/store/apps/details?id=com.gcityxms2.app"
        />
      </Box>
    </Box>
  );
}
