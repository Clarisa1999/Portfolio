import React from "react";
import "./landingPage.css";
import myImage from "../../media-files/myImage.JPG";
import { GitHub, YouTube } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const landingPage = () => {
  return (
    <div id="landing">
      <div className="intro">
        <h1 id="intro1">Hie, my name is </h1>
        <h1 id="name">Rufaro Clarisa Gapare.....</h1>
      </div>
      <div className="content">
        <h2 id="developer">I am a Front End Developer</h2>
        <img id="image" src={myImage} height={300} width={300} />
      </div>
      <h2 id="passion">
        I am passionate about crafting scalable frontend products with great
        <br></br>
        user experience that create a positive impact in the community!
      </h2>
      <div className="icons">
        <div id="empty"></div>
        <div className="rightSide">
          <div id="sayHello">
            <h3 id="hello"> Say Hesllo</h3>
            <h3 id="email"> rufaro.gapare@mail.mcgill.ca</h3>
          </div>
          <div id="iconsContainer">
            <LinkedInIcon
              sx={{
                color: "blue",
                display: "inline",
                fontSize: 60,
              }}
            ></LinkedInIcon>
            <GitHub
              sx={{
                color: "black",
                display: "inline",
                fontSize: 60,
              }}
            ></GitHub>
            <YouTube
              sx={{
                color: "red",
                display: "inline",
                fontSize: 60,
              }}
            ></YouTube>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default landingPage;
