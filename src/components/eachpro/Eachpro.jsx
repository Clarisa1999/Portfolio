import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";

export default function (props) {
  return (
    <Box sx={{ display: "flex", alignSelf: "center", flexDirection: "column" }}>
      <Typography gutterBottom variant="h4" color="text.primary">
        {props.heading}
      </Typography>
      <Typography gutterBottom variant="body2" color="text.primary">
        {props.body}
      </Typography>
    </Box>
  );
}
