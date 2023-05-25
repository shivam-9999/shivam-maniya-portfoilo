import logo from "./logo.svg";
import "./Asset/App.css";
import React, { useEffect, useRef, useState } from "react";
import About from "./Component/About";
import HashLoader from "react-spinners/HashLoader";
import { useAnimationFrame } from "framer-motion";
// our Theatre.js project sheet, we'll use this later
// const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="bg-black h-screen grid  place-content-center">
      {loading ? (
        <div>
          <HashLoader color="white" size={200} aria-label="Loading Spinner" />
        </div>
      ) : (
        <div className="container mx-auto px-4">
          <About />
        </div>
      )}
    </div>
  );
}

export default App;
