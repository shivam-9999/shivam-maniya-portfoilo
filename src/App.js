import logo from "./logo.svg";
import "./Asset/App.css";
import React, { useEffect, useRef, useState } from "react";
import About from "./Component/About";

// our Theatre.js project sheet, we'll use this later
// const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

function App() {
  return (
    <div className="App">
      <About />
    </div>
  );
}

export default App;
