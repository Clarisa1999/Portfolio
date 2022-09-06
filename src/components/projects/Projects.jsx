import React from "react";
import "./projects.css";
import Typography from "@mui/material/Typography";
import { padding } from "@mui/system";
import Eachpro from "../eachpro/Eachpro";
import { Box } from "@mui/material";

export default function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        minWidth: "100%",
        height: "100vh",
        background: (theme) => theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Box sx={{ width: "75%", alignSelf: "center" }}>
        <Typography
          gutterBottom
          variant="h4"
          color="text.primary"
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignSelf: "flex-start",
            flexDirection: "column",
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          Projects I have done...
        </Typography>
        <Eachpro
          heading="McGill Space"
          body="Yourself could be a challenging task, but when it comes to an assignment, you can’t skip it. So, are currently dealing with an essay that requires you to describe yourself? Are you finding it challenging to do so? If so, we are here to help. We understand how normal it is to go blank when asked about describing oneself. And, if you’re a student, the pressure to do so could be immense. It is because you know the reader would be marking your write-up rather than reading it for fun. The pressure to write better and follow the right structure can be overwhelming. It can end up making you freeze or feel you’re not good enough. However, the reality is otherwise. Here are a few things you can do to avoid being in that situation:"
        />
        <Eachpro
          heading="Image"
          body="Yourself could be a challenging task, but when it comes to an assignment, you can’t skip it. So, are currently dealing with an essay that requires you to describe yourself? Are you finding it challenging to do so? If so, we are here to help. We understand how normal it is to go blank when asked about describing oneself. And, if you’re a student, the pressure to do so could be immense. It is because you know the reader would be marking your write-up rather than reading it for fun. The pressure to write better and follow the right structure can be overwhelming. It can end up making you freeze or feel you’re not good enough. However, the reality is otherwise. Here are a few things you can do to avoid being in that situation:"
        />
        <Eachpro
          heading="G-City"
          body="Yourself could be a challenging task, but when it comes to an assignment, you can’t skip it. So, are currently dealing with an essay that requires you to describe yourself? Are you finding it challenging to do so? If so, we are here to help. We understand how normal it is to go blank when asked about describing oneself. And, if you’re a student, the pressure to do so could be immense. It is because you know the reader would be marking your write-up rather than reading it for fun. The pressure to write better and follow the right structure can be overwhelming. It can end up making you freeze or feel you’re not good enough. However, the reality is otherwise. Here are a few things you can do to avoid being in that situation:"
        />
      </Box>
    </Box>
  );
}
