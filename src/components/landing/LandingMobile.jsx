import React from "react";
import "./landingPage.css";
import myImage from "../../media-files/Myimage2.jpg";
import { Box, Stack, Typography } from "@mui/material";
import Reveal from "../common/Reveal";

const LandingMobile = () => {
  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          background: (theme) => theme.palette.background.default,
        }}
      >
        <Stack sx={{ pl: "10%", mt: "15%" }}>
          <Reveal>
            <Typography
              variant="h6"
              color="primary"
              sx={{ fontWeight: 600, fontSize: 14 }}
            >
              Hi, I'm
            </Typography>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ pt: 1, fontWeight: "bold", fontSize: "1.8rem" }}
            >
              Clarisa
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ pt: 1, fontWeight: 500, width: "85%", fontSize: 13 }}
            >
              Software Engineer — distributed systems, cloud infrastructure &amp; backend services
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ pt: 2.5, width: "85%", lineHeight: 1.8, fontSize: 13 }}
            >
              I build reliable, scalable systems and the tools that keep them running. From
              backend services and CI/CD pipelines to cloud-native applications and
              observability — I turn complex engineering challenges into thoughtful,
              high-impact solutions.
            </Typography>
          </Reveal>
        </Stack>
        <Stack sx={{ alignItems: "center", mt: 3, mb: "15%" }}>
          <Reveal delay={0.15} y={20}>
            <img
              className="landing-photo"
              src={myImage}
              height={220}
              width={220}
              alt="Rufaro Clarisa Gapare"
            />
          </Reveal>
        </Stack>
      </Box>
    </>
  );
};

export default LandingMobile;
