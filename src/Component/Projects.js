import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function Projects() {
  return (
    <motion.div className="min-h-screen d-flex p-5">
      <motion.div
        initial={{
          opacity: 1,
          background: "#96276B",
          transform: " ",
        }}
        whileInView={{
          opacity: 1,
          transform: "",
        }}
        transition={{
          delay: 0.04,
          duration: 0.7,
        }}
        className="  text-white border-2 bg-pink border-pink mt-5"
      >
        <motion.div className="bg-black px-4 pb-4">
          My Portfolio Website
        </motion.div>
        <motion.div className="bg-black px-4 pb-4">
          A high-performance, Responsive website that uses the power of creative
          SVG, Greensock (GSAP) &amp; ScrollMagic powered animations for
          enriching user experience.
          <a className=" px-4 pb-4" href="projects/portfolio-site.html">
            Case Study
          </a>
        </motion.div>
      </motion.div>
      <motion.div className="  text-white border-2 bg-pink border-pink mt-5">
        <motion.div className="bg-black px-4 pb-4">
          My Portfolio Website
        </motion.div>
        <motion.div className="bg-black px-4 pb-4">
          A high-performance, Responsive website that uses the power of creative
          SVG, Greensock (GSAP) &amp; ScrollMagic powered animations for
          enriching user experience.
          <a className=" px-4 pb-4" href="projects/portfolio-site.html">
            Case Study
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
