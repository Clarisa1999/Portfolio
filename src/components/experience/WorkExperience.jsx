import React from "react";
import { Box, CardActionArea, Grid, Link, Typography } from "@mui/material";
import image from "../../media-files/image.png";
import microsoft from "../../media-files/microsoft.png";
import firewox from "../../media-files/firewox.png";
import affiliations from "../../media-files/code.png";

import Expcard from "../expcard/Expcard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import List from "@mui/material";
import CardActions from "@mui/material/CardActions";
import LaunchIcon from "@mui/icons-material/Launch";
import ListItem from "@mui/material/ListItem";

const workExperience = () => {
  return (
    <Box
      component="div"
      id="experience"
      sx={{
        minWidth: "100%",
        height: "100vh",
        background: (theme) => theme.palette.background.paper,
        display: "flex",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={6}
      >
        <Grid item xs={2.5}>
          <Link href="https://image.a11y.mcgill.ca/" target="_blank" underline="none">
            <Expcard
              image={image}
              companyName="McGill Image"
              heading="Software Developer 09/2021-04/2022"
              pointOne="Worked on the front-end of a web extension using vanilla Java Script and Constructed API-shemas"
              pointTwo="Built the settings page of the web extension to allow users to save preferences"
              pointThree="Communicated the flow and technicalities of the product with multi-disciplinary teams of engineers, designers, and clients"
            />
          </Link>
        </Grid>

        <Grid item xs={2.5}>
          <Link
            href="https://www.microsoft.com/en-us/about"
            target="_blank"
            underline="none"
          >
            <Expcard
              image={microsoft}
              companyName="Microsoft"
              heading="Software Engineer Intern   05/2021-08/2021 "
              pointOne="Worked on the front-end of a travel planner service for edge using Web Components, FAST, TypeScript, HTML, CSS"
              pointTwo="Expanded and integrated APIs to the front-end of the application and fixed CORS to enable deployment of the APIs in different geolocations"
              pointThree="Implemeted the search filters of the appplication to make travel planning more accesible to users"
            />
          </Link>
        </Grid>

        <Grid item xs={2.5}>
          <Link
            href="https://www.linkedin.com/company/firewox-technologies/about/"
            target="_blank"
            underline="none"
          >
            <Expcard
              image={firewox}
              companyName="Firewox Technologies Inc"
              heading="Software Developer Intern    06/2020-08/2020"
              pointOne="Used Java and Retrofit in Android Studio to retrieve IPV4 and IPV6 addresses of servers to an android application"
              pointTwo="Worked on the front-end of company’s website as well as the subscription plugins"
              pointThree="Parsed and rendered json data from the server into a readable format in the application"
            />
          </Link>
        </Grid>

        <Grid item xs={2.5}>
          <Link
            href="https://www.linkedin.com/company/firewox-technologies/about/"
            target="_blank"
            underline="none"
          >
            <Card
              sx={{
                backgroundColor: (theme) => theme.palette.background.paper,
              }}
            >
              <CardActionArea sx={{ display: "flex", flexDirection: "column" }}>
                <CardMedia
                  id="backrgound"
                  component="img"
                  height="150"
                  image={affiliations}
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
                  <br></br>
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
                </CardContent>
                <LaunchIcon
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light" ? "#62eb31" : "white",
                    alignSelf: "flex-end",
                    // justifyContent: "flex-end",
                    fontSize: 30,
                  }}
                />
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default workExperience;
