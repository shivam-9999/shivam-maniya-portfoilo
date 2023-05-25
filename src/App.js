import logo from "./logo.svg";
import "./Asset/App.css";
import React, { useEffect, useRef, useState } from "react";
import About from "./Component/About";
import HashLoader from "react-spinners/HashLoader";
import { useAnimationFrame } from "framer-motion";
import Nav from "./Component/Nav/Nav";

// our Theatre.js project sheet, we'll use this later
// const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="bg-black h-screen ">
      <Nav />
      {loading ? (
        <div className="h-screen flex items-center justify-center  ">
          <HashLoader color="white" size={200} aria-label="Loading Spinner" />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="container mx-auto px-4  ">
            <About />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
