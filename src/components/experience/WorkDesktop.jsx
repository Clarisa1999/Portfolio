import React from "react";
import { Box, CardActionArea, Grid, Typography } from "@mui/material";
import image from "../../media-files/image.png";
import microsoft from "../../media-files/microsoft.png";
import affiliations from "../../media-files/code.png";
import amazon from "../../media-files/amazon.png";
import citi from "../../media-files/citi.png";
import Expcard from "../expcard/Expcard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ListItem from "@mui/material/ListItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";

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

const WorkDesktop = () => {
  //   const themeMui = useTheme();
  //   const isSmallScreen = useMediaQuery(themeMui.breakpoints.down("md"));
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Box
        component="div"
        id="experience"
        minHeight="100vh"
        sx={{
          background: (theme) => theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={3}
          marginTop={"100px"}
          marginBottom={"100px"}
        >
          <Grid item xs={12} sm={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Expcard
              image={image}
              link={"https://image.a11y.mcgill.ca/"}
              companyName="McGill IMAGE"
              heading="Software Developer"
              subHeading="Sept 2021 – April 2022"
              points={[
                "Built a cross-browser settings page for an accessibility extension, enabling 500+ visually impaired users to customize haptics and spatialized audio (Vanilla JS, ES6+).",
                "Collaborated with design and QA to deliver a seamless, accessible experience across Chrome, Firefox, and Edge.",
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Expcard
              image={microsoft}
              link={"https://www.microsoft.com/en-us/about"}
              companyName="Microsoft"
              heading="Software Engineer Intern"
              subHeading="May 2021 – Aug 2021"
              points={[
                "Designed and shipped front-end features for Microsoft Edge Travel, enhancing the experience for 1k+ users.",
                "Implemented filters and geospatial mapping, improving search relevance and user engagement.",
                "Built a travel card details page, boosting interaction with travel recommendations.",
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Expcard
              image={citi}
              companyName="Citi"
              link={"https://icg.citi.com/icghome/what-we-do/citi-business-online"}
              heading="Software Developer"
              subHeading="July 2023 – July 2024"
              points={[
                "Enhanced CITI Business Online for 1M+ users by launching new transaction features (React, Redux, TypeScript).",
                "Built internal tooling to centralize customer account management, cutting developer data-retrieval time by 60%.",
                "Architected integration of front-end apps with backend services via REST APIs, improving transaction reliability and reducing authentication latency.",
                "Wrote unit and integration tests with Jest, reducing production bugs and improving release reliability.",
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Expcard
              image={amazon}
              link={"https://aws.amazon.com/"}
              companyName="Amazon"
              heading="Software Development Engineer"
              subHeading="Sept 2024 – Feb 2026 · SWE Intern 2023"
              points={[
                "Engineered real-time metrics logging in C, Java, and Rust for a high-performance Network Load Balancer, enabling instant root-cause analysis at 1M+ packets/sec.",
                "Designed and optimized components of a distributed system handling high-throughput TCP, UDP, and DNS traffic across multi-region deployments.",
                "Revamped CI/CD pipelines, accelerating patching by 75% and ensuring 100% SLA compliance across global services.",
                "Authored 6 technical design docs (4 implemented end-to-end) and mentored interns and junior engineers across design reviews.",
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: "flex", justifyContent: "center" }}>
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
                title="Affiliations"
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
                  src={affiliations}
                />
                <CardContent sx={{ alignItems: "flex-start" }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: "bold", textAlign: "left" }}
                  >
                  </Typography>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>

                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: 13 }}
                        >
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontWeight: "bold" }}
                          >
                            Awards
                          </Typography>
                          <ListItem sx={{ display: "list-item", fontSize: 13 }}>
                            Re-writting the code 2022
                          </ListItem>
                          <ListItem sx={{ display: "list-item", fontSize: 13 }}>
                            Palantir Women in Technology 2020
                          </ListItem>
                          <ListItem sx={{ display: "list-item", fontSize: 13 }}>
                            McGill MasterCard Scholarship 2018
                          </ListItem>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontWeight: "bold" }}
                          >
                            Clubs
                          </Typography>
                          <ListItem sx={{ display: "list-item" }}>
                            NSBE VicePresident Events 2021-2022
                          </ListItem>
                          <ListItem sx={{ display: "list-item" }}>
                            Computer Science Undergarduate Society President 2020-2021
                          </ListItem>
                        </Typography>
                      </Collapse>
                    </div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WorkDesktop;
