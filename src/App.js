import logo from "./logo.svg";
import "./Asset/App.css";
import React, { useEffect, useRef, useState } from "react";
import HomePage from "./Component/HomePage";
import HashLoader from "react-spinners/HashLoader";
import { useAnimationFrame } from "framer-motion";
import Nav from "./Component/Nav/Nav";
import About from "./Component/About";
import WorkExperience from "./Component/WorkExperience";
import Education from "./Component/Education";
import Projects from "./Component/Projects";
import ContactInformation from "./Component/ContactInformation";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    });
  }, []);
  return (
    <div className="bg-black">
      <div className="container  mx-auto ">
        <Nav />
        {loading ? (
          <div className="min-h-screen flex items-center justify-center ">
            <HashLoader color="white" size={200} aria-label="Loading Spinner" />
          </div>
        ) : (
          <section className="">
            {/* ---- home Page  ----- */}
            <section className="homepage flex flex-col justify-center md:mb-48 px-4 font-weight: 400; font-bold text-xs">
              <HomePage />
            </section>

            {/* ---- About ----- */}
            <section className="md:mb-48 sm:mb-96 ">
              <About />
            </section>

            {/* ---- Education  ----- */}
            <section className="education md:mb-48 ">
              <Education />
            </section>
            {/* ---- Work Experience  ----- */}
            <section className=" workExperience  sm:mb-40">
              <WorkExperience />
            </section>

            {/* ---- Project  ----- */}
            <section className="project">
              <Projects />
            </section>

            {/* ---- Contact Us  ----- */}
            <ContactInformation />
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
