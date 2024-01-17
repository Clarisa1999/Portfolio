import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import LaunchIcon from "@mui/icons-material/Launch";
import ListItem from "@mui/material/ListItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import { Link } from "@mui/material";

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Expcard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
          width: "300px",
        }}
      >
        <CardHeader title={props.companyName} />
        <CardActionArea>
          <CardMedia
            component="img"
            style={{
              display: "flex",
              maxWidth: "200px",
              maxHeight: "150px",
              display: "block",
              margin: "auto",
            }}
            src={props.image}
          />
          <CardContent>
            {/* <Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>
              {props.companyName}
            </Typography> */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: "bold" }}
            >
              {props.heading}
            </Typography>
            <Typography
              variant="body3"
              color="text.secondary"
              sx={{ fontWeight: "bold" }}
            >
              {props.subHeading}
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                {props.shouldExpand && (
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                )}
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 13 }}
                  >
                    <ListItem sx={{ display: "list-item" }}>{props.pointOne}</ListItem>
                    <ListItem sx={{ display: "list-item" }}>{props.pointTwo}</ListItem>
                    <ListItem sx={{ display: "list-item" }}>{props.pointThree}</ListItem>
                  </Typography>
                </Collapse>
              </div>
              <div>
                <Link href={props.link} target="_blank" underline="none">
                  <LaunchIcon
                    sx={{
                      color: (theme) =>
                        theme.palette.mode === "light" ? "#62eb31" : "white",
                      fontSize: 30,
                    }}
                  />
                </Link>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
