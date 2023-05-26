import { AboutContent, HomepageContent } from "../Asset";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  return (
    <div>
      {/* <motion.h1 style={{ color: "white" }}>About Me</motion.h1> */}
      <motion.p
        style={{
          fontFamily: "'Nunito', sans-serif;",
          color: "lightyellow",
          fontSize: "18px",
          lineHeight: "30px",
          maxWidth: "78%",
        }}
        initial={{ left: "0%", opacity: 0 }}
        animate={{ left: "0%", opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.p>
    </div>
  );
}

export default About;
