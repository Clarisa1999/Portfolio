import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";

export default function (props) {
  return (
    <Box sx={{ width: "75%" }}>
      <Typography
        gutterBottom
        variant="h3"
        sx={{ paddingTop: 10, paddingLeft: 10 }}
        color="text.primary"
      >
        {props.heading}
      </Typography>
      <Typography
        gutterBottom
        variant="body2"
        color="text.primary"
        sx={{ paddingLeft: 10 }}
      >
        {props.body}
      </Typography>
    </Box>
  );
}
