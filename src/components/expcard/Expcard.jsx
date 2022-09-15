import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, List } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import LaunchIcon from "@mui/icons-material/Launch";
import ListItem from "@mui/material/ListItem";

export default function Expcard(props) {
  return (
    <div>
      <Card
        sx={{
          // maxWidth: 300,
          // height: 500,
          backgroundColor: (theme) => theme.palette.background.paper,
        }}
      >
        <CardActionArea sx={{ display: "flex", flexDirection: "column" }}>
          <CardMedia id="backrgound" component="img" height="150" image={props.image} />
          <CardContent>
            <Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>
              {props.companyName}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: "bold" }}
            >
              {props.heading}
            </Typography>
            <br></br>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: 13 }}>
              <ListItem sx={{ display: "list-item" }}>{props.pointOne}</ListItem>
              <ListItem sx={{ display: "list-item" }}>{props.pointTwo}</ListItem>
              <ListItem sx={{ display: "list-item" }}>{props.pointThree}</ListItem>
            </Typography>
          </CardContent>
          <LaunchIcon
            sx={{
              color: (theme) => (theme.palette.mode === "light" ? "#62eb31" : "white"),
              alignSelf: "flex-end",
              fontSize: 30,
            }}
          />
        </CardActionArea>
      </Card>
    </div>
  );
}
