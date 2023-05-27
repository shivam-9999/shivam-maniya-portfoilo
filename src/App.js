import logo from "./logo.svg";
import "./Asset/App.css";
import React, { useEffect, useRef, useState } from "react";
import HomePage from "./Component/HomePage";
import HashLoader from "react-spinners/HashLoader";
import { useAnimationFrame } from "framer-motion";
import Nav from "./Component/Nav/Nav";
import About from "./Component/About";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    });
  }, []);
  return (
    <div className="bg-black  ">
      <Nav />
      {loading ? (
        <div className="h-screen flex items-center justify-center ">
          <HashLoader color="white" size={200} aria-label="Loading Spinner" />
        </div>
      ) : (
        <div>
          <div className="flex items-center flex-col justify-center h-screen">
            <div className="container mx-auto px-4 	font-weight: 400; font-bold text-xs">
              <HomePage />
            </div>
          </div>
          <div className="flex items-center flex-col justify-center h-screen">
            <div className="container mx-auto px-4 	font-weight: 400; font-bold text-xs">
              <About />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
