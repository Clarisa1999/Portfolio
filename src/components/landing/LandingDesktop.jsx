import React from "react";
import "./landingPage.css";
import myImage from "../../media-files/Myimage2.jpg";
import { Box, Stack, Typography } from "@mui/material";
import Reveal from "../common/Reveal";
import Parallax from "../common/Parallax";

const LandingDesktop = () => {
  return (
    <>
      <Box
        component="div"
        id="landing"
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: "100vh",
          background: (theme) => theme.palette.background.default,
          lineHeight: 1.7,
        }}
      >
        <Stack sx={{ pl: 8, flex: 0.73 }}>
          <Reveal>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 600 }}>
              Hi, I'm
            </Typography>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{ pt: 1, fontWeight: "bold" }}
            >
              Rufaro Clarisa Gapare
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ pt: 1, fontWeight: 400 }}
            >
              Software Engineer — distributed systems, cloud infrastructure &amp; backend services
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              width="78%"
              sx={{ pt: 3, lineHeight: 1.9 }}
            >
              I build reliable, scalable systems and the tools that keep them running. From
              backend services and CI/CD pipelines to cloud-native applications and
              observability — I turn complex engineering challenges into thoughtful,
              high-impact solutions.
            </Typography>
          </Reveal>
        </Stack>
        <Stack>
          <Reveal delay={0.15} y={20}>
            <Parallax offset={70}>
              <img
                className="landing-photo"
                src={myImage}
                height={320}
                width={320}
                alt="Rufaro Clarisa Gapare"
              />
            </Parallax>
          </Reveal>
        </Stack>
      </Box>
    </>
  );
};

export default LandingDesktop;
