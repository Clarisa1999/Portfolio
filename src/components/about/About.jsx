import React from "react";
import "./about.css";
import Container from "@mui/material/Container";
// import { Container } from '@mui/material';

const About = () => {
  return (
    <div className="about">
      <div id="rightSide">
        <Container maxWidth="sm">
          <h1 id="firstHeading">About me</h1>
          <span id="aboutText">
            Hie my name is Clarisa. I enjoy creating things that live on the internet. I
            am currently a senior at McGill University Studying Computer Science and
            Physics.
          </span>
        </Container>
      </div>
      <div id="leftSide">
        <Container maxWidth="sm">
          <h1 id="secondHeading">Things I do</h1>
          <span id="things">
            Hie my name is Clarisa. I enjoy creating things that live on the internet. I
            am currently a senior at McGill University Studying Computer Science and
            Physics.
          </span>
        </Container>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default About;
