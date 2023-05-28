import logo from "./logo.svg";
import "./Asset/App.css";
import React, { useEffect, useRef, useState } from "react";
import HomePage from "./Component/HomePage";
import HashLoader from "react-spinners/HashLoader";
import { useAnimationFrame } from "framer-motion";
import Nav from "./Component/Nav/Nav";
import About from "./Component/About";
import WorkExperience from "./Component/WorkExperience";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);
  return (
    <div className="bg-black">
      <div className="container h-screen mx-auto ">
        <Nav />
        {loading ? (
          <div className="h-screen flex items-center justify-center ">
            <HashLoader color="white" size={200} aria-label="Loading Spinner" />
          </div>
        ) : (
          <section>
            {/* ---- home Page  ----- */}
            {/* <section className="flex flex-col justify-center h-screen px-4 font-weight: 400; font-bold text-xs">
            <HomePage />
          </section> */}
            {/* ---- Work Experience  ----- */}
            <section className=" ">
              <WorkExperience />
            </section>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
