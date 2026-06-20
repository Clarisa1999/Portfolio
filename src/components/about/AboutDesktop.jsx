import React from "react";
import { Box, Link, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Reveal from "../common/Reveal";

const DESIGN_DOCS_URL =
  "https://drive.google.com/drive/folders/1l10lTLAYNw7AuKFjbeA8lDafCwRdlvyV?usp=sharing";

const AboutDesktop = () => {
  return (
    <>
      <Box
        component="div"
        id="about"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: (theme) => theme.palette.background.accent,
          py: 12,
        }}
      >
        <Reveal style={{ alignSelf: "flex-start", width: "45%", marginLeft: "56px" }}>
          <Typography variant="h3" color="text.primary">
            About me
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ pt: 2, lineHeight: 1.8 }}
          >
            I'm a Software Engineer who designs and operates distributed systems built to
            stay reliable at scale. System design is the part I care most about — defining
            clear architecture, data flows, capacity and failure modes, and the trade-offs
            behind each decision before a line of code is written, then proving those
            choices out in production. Since earning my B.Sc. in Computer Science and
            Physics from McGill University in 2023, I've owned services end to end across
            large-scale platforms, observability, CI/CD, and infrastructure automation —
            from the design doc through deployment and on-call.
          </Typography>
          <Link
            href={DESIGN_DOCS_URL}
            target="_blank"
            rel="noopener"
            underline="hover"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              mt: 2.5,
              fontWeight: 600,
              color: "primary.main",
            }}
          >
            Read a few of my design docs
            <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Link>
        </Reveal>
        <Reveal
          delay={0.1}
          style={{ alignSelf: "flex-end", width: "45%", marginRight: "64px", marginTop: "48px" }}
        >
          <Typography variant="h3" color="text.primary">
            Beyond the code
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ pt: 2, lineHeight: 1.8 }}
          >
            My core toolkit spans Java, Python, TypeScript, and C, alongside modern cloud
            and platform tooling. I'm drawn to distributed systems, platform engineering,
            and developer experience — building the abstractions and automation that help
            entire teams ship faster and more safely. Outside of my day-to-day, I founded
            CodeGaps, a mentorship platform that helps students build real technical depth,
            gain industry insight, and break into software engineering careers. I aim to
            leave every system — and every engineer around it — better than I found it.
          </Typography>
        </Reveal>
      </Box>
    </>
  );
};

export default AboutDesktop;
