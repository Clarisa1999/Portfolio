import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Link } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import LaunchIcon from "@mui/icons-material/Launch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";

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
  const points = props.points || [];
  const canExpand = points.length > 0;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card
        elevation={0}
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
          width: "230px",
          borderRadius: 3,
          boxShadow: "0 6px 24px rgba(0, 0, 0, 0.06)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 14px 36px rgba(16, 185, 129, 0.18)",
          },
        }}
      >
        <CardHeader
          title={props.companyName}
          sx={{
            pb: 0,
            "& .MuiCardHeader-title": { fontSize: 15, fontWeight: 700 },
          }}
        />
        <CardActionArea>
          <CardMedia
            component="img"
            style={{
              maxWidth: "120px",
              maxHeight: "90px",
              display: "block",
              margin: "8px auto",
            }}
            src={props.image}
          />
          <CardContent sx={{ py: 1.5 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: "bold", fontSize: 13 }}
            >
              {props.heading}
            </Typography>
            <Typography
              variant="body3"
              color="text.secondary"
              sx={{ fontWeight: "bold", fontSize: 12 }}
            >
              {props.subHeading}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ flex: 1 }}>
                {canExpand && (
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                )}
              </div>
              <div>
                <Link href={props.link} target="_blank" underline="none">
                  <LaunchIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: 24,
                    }}
                  />
                </Link>
              </div>
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                {points.map((point, index) => (
                  <Typography
                    key={index}
                    component="li"
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12.5, lineHeight: 1.55, mb: 0.75 }}
                  >
                    {point}
                  </Typography>
                ))}
              </Box>
            </Collapse>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
