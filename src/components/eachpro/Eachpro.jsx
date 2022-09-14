import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export default function (props) {
  return (
    <Box sx={{ display: "flex", alignSelf: "center", flexDirection: "column" }}>
      <Link href={props.link} target="_blank" underline="always" color={"text.primary"}>
        <Typography gutterBottom variant="h4" color="text.primary">
          {props.heading}
        </Typography>
      </Link>

      <Typography gutterBottom variant="body2" color="text.primary">
        {props.body}
      </Typography>
    </Box>
  );
}
