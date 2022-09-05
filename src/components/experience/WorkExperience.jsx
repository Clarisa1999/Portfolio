import React from "react";
import "./workExperience.css";

import { CardActionArea, Grid, Typography } from "@mui/material";
import image from "../../media-files/image.png";
import microsoft from "../../media-files/microsoft.png";
import firewox from "../../media-files/firewox.png";
import Expcard from "../expcard/Expcard";

const workExperience = () => {
  return (
    <div className="workExperience">
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
            experienceBody="Yourself could be a challenging task, but when it comes to an assignment, you can’t skip it. So, are currently dealing with an essay that requires you to describe yourself? Are you finding it challenging to do so? If so, we are here to help. We understand how normal it is to go blank when asked about describing oneself. And, if you’re a student, the pressure to do so could be immense. It is because you know the reader would be marking your write-up rather than reading it for fun. The pressure to write better and follow the right structure can be overwhelming. It can end up making you freeze or feel you’re not good enough. However, the reality is otherwise. Here are a few things you can do to avoid being in that situation:"
          />
        </Grid>
        <Grid item xs={3}>
          <Expcard
            image={microsoft}
            companyName="Microsoft"
            heading="Software Enginner Intern   05/2021-08/2021"
            experienceBody="Yourself could be a challenging task, but when it comes to an assignment, you can’t skip it. So, are currently dealing with an essay that requires you to describe yourself? Are you finding it challenging to do so? If so, we are here to help. We understand how normal it is to go blank when asked about describing oneself. And, if you’re a student, the pressure to do so could be immense. It is because you know the reader would be marking your write-up rather than reading it for fun. The pressure to write better and follow the right structure can be overwhelming. It can end up making you freeze or feel you’re not good enough. However, the reality is otherwise. Here are a few things you can do to avoid being in that situation:"
          />
        </Grid>
        <Grid item xs={3}>
          <Expcard
            image={firewox}
            companyName="Firewox Technplogies Inc"
            heading="Software Developer Intern    06/2020-08/2020"
            experienceBody="Yourself could be a challenging task, but when it comes to an assignment, you can’t skip it. So, are currently dealing with an essay that requires you to describe yourself? Are you finding it challenging to do so? If so, we are here to help. We understand how normal it is to go blank when asked about describing oneself. And, if you’re a student, the pressure to do so could be immense. It is because you know the reader would be marking your write-up rather than reading it for fun. The pressure to write better and follow the right structure can be overwhelming. It can end up making you freeze or feel you’re not good enough. However, the reality is otherwise. Here are a few things you can do to avoid being in that situation:"
          />
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default workExperience;
