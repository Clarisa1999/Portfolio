import React from "react";
import Typography from "@mui/material/Typography";
import Eachpro from "../eachpro/Eachpro";
import { Box, Stack } from "@mui/material";
import Reveal from "../common/Reveal";
import Parallax from "../common/Parallax";

const projects = [
  {
    heading: "Image",
    body: "Image is an accessibility project which uses rich audio (sonification) together with the sense of touch (haptics) to provide a faster and more nuanced experience of graphics on the web. This will permit interpretation of maps, charts, and photographs, in which the visual experience is replaced with multimodal sensory feedback, rendered in a manner that helps overcome access barriers for users who are blind, deafblind, or partially sighted.",
    link: "https://image.a11y.mcgill.ca/",
    tech: ["JavaScript", "Accessibility", "Design", "ES6", "Haptics", "Web Audio API"],
  },
  {
    heading: "G-City",
    body: "A civic-tech mobile app I designed and shipped to connect my home community in Zimbabwe directly with City Council services. Residents could report issues — from waste buildup to water shortages — while the Council broadcast schedules like load-shedding, garbage collection, and water shutdowns, helping 2,000+ citizens plan around essential services. I owned the mobile front end end to end and integrated it with RESTful APIs for registration, authentication, and real-time updates. Launched in 2019.",
    link: "https://play.google.com/store/apps/details?id=com.gcityxms2.app",
    tech: ["Android", "Java", "Firebase"],
  },
];

export default function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        background: (theme) => theme.palette.background.accent,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        minHeight: "100vh",
        py: { xs: 8, md: 10 },
      }}
    >
      <Box sx={{ width: "85%", maxWidth: 900, alignSelf: "center" }}>
        <Reveal>
          <Typography
            gutterBottom
            variant="h4"
            color="text.primary"
            sx={{ fontWeight: "bold", mb: 5, fontSize: { xs: "1.5rem", md: "2.125rem" } }}
          >
            Selected Projects
          </Typography>
        </Reveal>

        <Stack spacing={6}>
          {projects.map((project, index) => (
            <Reveal key={project.heading} delay={index * 0.1}>
              <Parallax offset={index % 2 === 0 ? 40 : -40}>
                <Eachpro
                  heading={project.heading}
                  body={project.body}
                  link={project.link}
                  tech={project.tech}
                />
              </Parallax>
            </Reveal>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
