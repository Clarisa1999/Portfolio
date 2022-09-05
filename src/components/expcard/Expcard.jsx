import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Expcard(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 300, backgroundColor: "var(--color-exp)" }}>
        <CardActionArea>
          <CardMedia
            id="backrgound"
            component="img"
            height="180"
            image={props.image}
            alt="green iguana"
          />
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
            <Typography variant="body2" color="text.secondary">
              {props.experienceBody}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
