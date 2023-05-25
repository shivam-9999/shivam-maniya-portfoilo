import React from "react";
import { AboutMe, hello } from "../Asset/index";
import { Color } from "three";

function About() {
  return (
    <h1 style={{ fontFamily: "'Nunito', sans-serif;", color: "white" }}>
      {AboutMe}
    </h1>
  );
}

export default About;
