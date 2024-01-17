import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const About = () => {
  const themeMui = useTheme();
  const isSmallScreen = useMediaQuery(themeMui.breakpoints.down("md"));

  return (
    <>
      {isSmallScreen ? (
        <Box
          component="div"
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: (theme) => theme.palette.primary.main,
          }}
        >
          <Box
            width="80%"
            sx={{
              alignSelf: "flex-start",
              justifyContent: "center",
              marginLeft: "50px",
              marginTop: "100px",
            }}
          >
            <Typography variant="h3" color="text.primary">
              About me
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{ paddingTop: 1, lineHeight: 1.75 }}
            >
              Hi, my name is Clarisa. I am from Zimbabwe. I am currently a senior
              MasterCard Scholar at McGill University Studying Computer Science and
              Physics. My interests in software development sparked in middle school when
              I first implemented an offline application to record voltage changes in one
              of my physics class experiments using Visual Basic 2008 and SQL.
              Fast-forward to today, I've had the priviledge to intern with different
              companies that focus one web and mobile development. I am passionate about
              building products and working in teams that make a positive difference in
              the community! I am also a founder of a non-governmental organisation that
              exposes high school students in Zimbabwe to to different career
              opportunities in software development.
            </Typography>
          </Box>
          <Box
            width="80%"
            sx={{
              alignSelf: "flex-start",
              justifyContent: "center",
              marginLeft: "50px",
              marginTop: "100px",
              marginBottom: "100px",
            }}
          >
            <Typography variant="h3" color="text.primary">
              Over the past years...
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{ paddingTop: 1, lineHeight: 1.75 }}
            >
              I've worked on products for companies and businesses ranging from marketing
              websites to enterprise apps that focus on fast, elegant and accessible user
              experiences. I am adept in Java, JavaScript, TypeScript, Web Components,
              OCaml, C, HTML, CSS/SASS, Bash, FAST,Kotlin, Swift. I am experienced in
              frameworks & Technologies such as React.js, React Native, Node.js, Express,
              Android Studio, REST API, SQL, Git, Firebase and Mongo DB. I have
              participated in hackathons and projects that have fortified my skills in
              problem solving, communication, team work, time management, responsibility
              and empathy.
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          component="div"
          id="about"
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: (theme) => theme.palette.primary.main,
          }}
        >
          <Box
            width="45%"
            sx={{
              alignSelf: "flex-start",
              justifyContent: "center",
              marginLeft: "50px",
              marginTop: "100px",
            }}
          >
            <Typography variant="h3" color="text.primary">
              About me
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{ paddingTop: 1, lineHeight: 1.75 }}
            >
              Hailing from Zimbabwe, I embarked on my journey into the world of technology
              by pursuing a dual degree in Computer Science and Physics at McGill
              University in Canada, graduating in 2023. My fascination with software
              development dates back to middle school, and today, I've translated that
              passion into a fulfilling career in software engineering. Over the years,
              I've been fortunate to intern with various companies, gaining extensive
              experience in full-stack development and networking. My philosophy centers
              around building software products that not only meet technical excellence
              but also make a positive impact on the community. In addition to my
              professional endeavors, I am the proud founder of CodeGaps, that provides
              mentorship to university students accross the globe. This platform aims to
              guide students in discovering their career paths in software development,
              delve into their first technical projects, and prepare them for internship
              interviews.
            </Typography>
          </Box>
          <Box
            width="45%"
            sx={{ alignSelf: "flex-end", marginRight: "60px", marginBottom: "100px" }}
          >
            <Typography variant="h3" color="text.primary">
              Over the past years...
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{ paddingTop: 1, lineHeight: 1.75 }}
            >
              I've contributed to a diverse range of projects, from marketing websites to
              enterprise apps, emphasizing fast, elegant, and accessible user experiences.
              Proficient in Java, JavaScript, TypeScript, Web Components, OCaml, C, HTML,
              CSS/SASS, Bash, FAST, Kotlin, Swift, and skilled in frameworks like
              React.js, React Native, Node.js, and more, I bring a versatile toolkit to
              software development. Engaging in hackathons and collaborative projects has
              honed my problem-solving, communication, teamwork, time management,
              responsibility, and empathy skills. Committed to innovation, I consistently
              deliver high-quality solutions that make a meaningful impact.
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default About;
