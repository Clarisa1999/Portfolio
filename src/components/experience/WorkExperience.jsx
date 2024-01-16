import React from "react";
import {
  Box,
  CardActionArea,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import image from "../../media-files/image.png";
import microsoft from "../../media-files/microsoft.png";
import affiliations from "../../media-files/code.png";
import amazon from "../../media-files/amazon.png";
import citi from "../../media-files/citi.png";
import Expcard from "../expcard/Expcard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LaunchIcon from "@mui/icons-material/Launch";
import ListItem from "@mui/material/ListItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

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

const WorkExperience = () => {
  const themeMui = useTheme();
  const isSmallScreen = useMediaQuery(themeMui.breakpoints.down("md"));
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {isSmallScreen ? (
        <Box
          minHeight="100vh"
          sx={{
            background: (theme) => theme.palette.background.paper,
            display: "flex",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={6}
          >
            <Grid item style={{ marginTop: "100px", width: "60%", padding: "30px" }}>
              <Expcard
                image={image}
                link={"https://image.a11y.mcgill.ca/"}
                companyName="McGill Image"
                shouldExpand={true}
                heading="Software Developer 09/2021-04/2022"
                pointOne="Worked on the front-end of a web extension using vanilla Java Script and Constructed API-shemas"
                pointTwo="Built the settings page of the web extension to allow users to save preferences"
                pointThree="Communicated the flow and technicalities of the product with multi-disciplinary teams of engineers, designers, and clients"
              />
            </Grid>

            <Grid item style={{ width: "60%", padding: "30px" }}>
              <Expcard
                image={microsoft}
                shouldExpand={true}
                link={"https://www.microsoft.com/en-us/about"}
                companyName="Microsoft"
                heading="Software Engineer Intern   05/2021-08/2021 "
                pointOne="Worked on the front-end of a travel planner service for edge using Web Components, FAST, TypeScript, HTML, CSS"
                pointTwo="Expanded and integrated APIs to the front-end of the application and fixed CORS to enable deployment of the APIs in different geolocations"
                pointThree="Implemeted the search filters of the appplication to make travel planning more accesible to users"
              />
            </Grid>

            <Grid item style={{ width: "60%", padding: "30px" }}>
              <Expcard
                image={amazon}
                link={"https://aws.amazon.com/"}
                shouldExpand={true}
                companyName="Amazon"
                heading="Software Developer Intern    05/2023-07/2023"
                pointOne="Developed a production-ready command-line tool in C and Rust within a 10-week timeframe, enabling users to analyze
network packets through networking protocols."
                pointTwo="Took part in implementing a robust load balancing tool for DynamoDB, harnessing the full potential of various AWS services
such as EC2, S3, and Lambda."
              />
            </Grid>

            <Grid item style={{ width: "60%", padding: "30px" }}>
              <Expcard
                image={citi}
                companyName="Citi"
                shouldExpand={true}
                link={"https://icg.citi.com/icghome/what-we-do/citi-business-online"}
                heading="Software Developer   07/2023-07/2024"
                pointOne="Developed a production-ready command-line tool in C and Rust within a 10-week timeframe, enabling users to analyze
network packets through networking protocols."
                pointTwo="Took part in implementing a robust load balancing tool for DynamoDB, harnessing the full potential of various AWS services
such as EC2, S3, and Lambda."
              />
            </Grid>

            <Grid item style={{ width: "60%", padding: "30px" }}>
              <Expcard
                image={amazon}
                companyName="Amazon"
                link="https://aws.amazon.com/"
                heading="Software Development Engineer    09/2024"
                shouldExpand={false}
              />
            </Grid>

            <Grid item style={{ width: "60%", padding: "30px" }}>
              <Card
                sx={{
                  backgroundColor: (theme) => theme.palette.background.paper,
                  width: "300px",
                }}
              >
                <CardHeader title="Affiliations" />
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
                    src={affiliations}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>
                      Affiliations
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: "bold", fontSize: 13 }}
                    ></Typography>

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
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box
          component="div"
          id="experience"
          minHeight="100vh"
          sx={{
            background: (theme) => theme.palette.background.paper,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={3}
            marginTop={"100px"}
          >
            <Grid item xs={12} sm={2.5}>
              <Expcard
                image={image}
                link={"https://image.a11y.mcgill.ca/"}
                companyName="McGill Image"
                shouldExpand={true}
                heading="Software Developer 09/2021-04/2022"
                pointOne="Worked on the front-end of a web extension using vanilla Java Script and Constructed API-shemas"
                pointTwo="Built the settings page of the web extension to allow users to save preferences"
                pointThree="Communicated the flow and technicalities of the product with multi-disciplinary teams of engineers, designers, and clients"
              />
            </Grid>

            <Grid item xs={12} sm={2.5}>
              <Expcard
                image={microsoft}
                shouldExpand={true}
                link={"https://www.microsoft.com/en-us/about"}
                companyName="Microsoft"
                heading="Software Engineer Intern   05/2021-08/2021 "
                pointOne="Worked on the front-end of a travel planner service for edge using Web Components, FAST, TypeScript, HTML, CSS"
                pointTwo="Expanded and integrated APIs to the front-end of the application and fixed CORS to enable deployment of the APIs in different geolocations"
                pointThree="Implemeted the search filters of the appplication to make travel planning more accesible to users"
              />
            </Grid>
            <Grid item xs={12} sm={2.5}>
              <Expcard
                image={amazon}
                link={"https://aws.amazon.com/"}
                shouldExpand={true}
                companyName="Amazon"
                heading="Software Developer Intern    05/2023-07/2023"
                pointOne="Developed a production-ready command-line tool in C and Rust within a 10-week timeframe, enabling users to analyze
network packets through networking protocols."
                pointTwo="Took part in implementing a robust load balancing tool for DynamoDB, harnessing the full potential of various AWS services
such as EC2, S3, and Lambda."
              />
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
            spacing={3}
            marginTop={"100px"}
            marginBottom={"100px"}
          >
            <Grid item xs={12} sm={2.5}>
              <Expcard
                image={citi}
                companyName="Citi"
                shouldExpand={true}
                link={"https://icg.citi.com/icghome/what-we-do/citi-business-online"}
                heading="Software Developer   07/2023-07/2024"
                pointOne="Developed a production-ready command-line tool in C and Rust within a 10-week timeframe, enabling users to analyze
network packets through networking protocols."
                pointTwo="Took part in implementing a robust load balancing tool for DynamoDB, harnessing the full potential of various AWS services
such as EC2, S3, and Lambda."
              />
            </Grid>
            <Grid item xs={12} sm={2.5}>
              <Expcard
                image={amazon}
                companyName="Amazon"
                link="https://aws.amazon.com/"
                heading="Software Development Engineer    09/2024"
                shouldExpand={false}
              />
            </Grid>

            <Grid item xs={12} sm={2.5}>
              <Card
                sx={{
                  backgroundColor: (theme) => theme.palette.background.paper,
                  width: "300px",
                }}
              >
                <CardHeader title="Affiliations" />
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
                    src={affiliations}
                  />
                  <CardContent sx={{ alignItems: "flex-start" }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: "bold", textAlign: "left" }}
                    >
                      Affiliations
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
      )}
    </>
  );
};

export default WorkExperience;
