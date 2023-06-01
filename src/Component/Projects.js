import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function Projects() {
  return (
    <motion.div className="min-h-screen d-flex p-5">
      <motion.div
        initial={{
          opacity: 1,
          background: "#96276B",
          transform: " matrix(1, 0, 0, 1, 0, 0)",
        }}
        whileInView={{
          opacity: 1,
          transform: "matrix(1, 0, 0, 1, 0, 0)",
        }}
        transition={{
          delay: 0.04,
          duration: 0.7,
        }}
        className="  text-white border-2 bg-pink border-pink mt-5"
      >
        <motion.div
          initial={{
            transform: "translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0)",
            opacity: 0,
          }}
          whileInView={{
            transform: "translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)",
            opacity: 1,
          }}
          transition={{
            delay: 0.05,
            duration: 1,
          }}
          className="bg-black px-4 pb-4"
        >
          My Portfolio Website
        </motion.div>
        <motion.div
          initial={{
            transform: "translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0)",
            opacity: 0,
          }}
          whileInView={{
            transform: "translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)",
            opacity: 1,
          }}
          transition={{
            delay: 0.05,
            duration: 1,
          }}
          className="bg-black px-4 pb-4"
        >
          A high-performance, Responsive website that uses the power of creative
          SVG, Greensock (GSAP) &amp; ScrollMagic powered animations for
          enriching user experience.
          <a className=" px-4 pb-4" href="projects/portfolio-site.html">
            Case Study
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 1,
          background: "#96276B",
          transform: " matrix(1, 0, 0, 1, 0, 0)",
        }}
        whileInView={{
          opacity: 1,
          transform: "matrix(1, 0, 0, 1, 0, 0)",
        }}
        transition={{
          delay: 0.04,
          duration: 0.7,
        }}
        className="  text-white border-2 bg-pink border-pink mt-5"
      >
        <motion.div
          initial={{
            transform: "translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0)",
            opacity: 0,
          }}
          whileInView={{
            transform: "translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)",
            opacity: 1,
          }}
          transition={{
            delay: 0.05,
            duration: 1,
          }}
          className="bg-black px-4 pb-4"
        >
          My Portfolio Website
        </motion.div>
        <motion.div
          initial={{
            transform: "translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0)",
            opacity: 0,
          }}
          whileInView={{
            transform: "translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)",
            opacity: 1,
          }}
          transition={{
            delay: 0.05,
            duration: 1,
          }}
          className="bg-black px-4 pb-4"
        >
          A high-performance, Responsive website that uses the power of creative
          SVG, Greensock (GSAP) &amp; ScrollMagic powered animations for
          enriching user experience.
          <a className=" px-4 pb-4" href="projects/portfolio-site.html">
            Case Study
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 1,
          background: "#96276B",
          transform: " matrix(1, 0, 0, 1, 0, 0)",
        }}
        whileInView={{
          opacity: 1,
          transform: "matrix(1, 0, 0, 1, 0, 0)",
        }}
        transition={{
          delay: 0.04,
          duration: 0.7,
        }}
        className="  text-white border-2 bg-pink border-pink mt-5"
      >
        <motion.div
          initial={{
            transform: "translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0)",
            opacity: 0,
          }}
          whileInView={{
            transform: "translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)",
            opacity: 1,
          }}
          transition={{
            delay: 0.05,
            duration: 1,
          }}
          className="bg-black px-4 pb-4"
        >
          My Portfolio Website
        </motion.div>
        <motion.div
          initial={{
            transform: "translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0)",
            opacity: 0,
          }}
          whileInView={{
            transform: "translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)",
            opacity: 1,
          }}
          transition={{
            delay: 0.05,
            duration: 1,
          }}
          className="bg-black px-4 pb-4"
        >
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
