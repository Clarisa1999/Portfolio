import React from "react";
import { Typography, AppBar } from "@material-ui/core";

import "./landingPage.css";
import myImage from "../../media-files/myImage.JPG";

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
    </div>
  );
};

export default landingPage;
