import React from "react";
import { Box, Typography } from "@mui/material";

const AboutMobile = () => {
  return (
    <>
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
            Hi, my name is Clarisa. I am from Zimbabwe. I am currently a senior MasterCard
            Scholar at McGill University Studying Computer Science and Physics. My
            interests in software development sparked in middle school when I first
            implemented an offline application to record voltage changes in one of my
            physics class experiments using Visual Basic 2008 and SQL. Fast-forward to
            today, I've had the priviledge to intern with different companies that focus
            one web and mobile development. I am passionate about building products and
            working in teams that make a positive difference in the community! I am also a
            founder of a non-governmental organisation that exposes high school students
            in Zimbabwe to to different career opportunities in software development.
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
            Android Studio, REST API, SQL, Git, Firebase and Mongo DB. I have participated
            in hackathons and projects that have fortified my skills in problem solving,
            communication, team work, time management, responsibility and empathy.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AboutMobile;
