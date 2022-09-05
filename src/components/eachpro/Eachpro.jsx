import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";

export default function (props) {
  return (
    <Box sx={{ width: "75%" }}>
      <Typography
        gutterBottom
        variant="h3"
        sx={{ fontWeight: "bold", paddingTop: 10, paddingLeft: 10 }}
      >
        {props.heading}
      </Typography>
      <Typography gutterBottom variant="body2" sx={{ paddingLeft: 10 }}>
        {props.body}
      </Typography>
    </Box>
  );
}
