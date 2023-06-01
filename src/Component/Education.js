import React from "react";
import { motion } from "framer-motion";

function Education() {
  return (
    <div className="mx-auto md:gap-0 sm:gap-4 justify-center items-center min-h-screen md:flex md:flex-row sm:flex-col">
      <motion.div
        className="card h-96 lg:w-80 md:w-60  bg-zinc-300 rounded-lg "
        initial={{ rotate: 20, scale: 0.2, opacity: 0.3 }}
        whileHover={{ translateY: "-40px", opacity: 1, scale: 1.1 }}
        whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
      >
        <div className="circle"></div>
      </motion.div>
      <motion.div
        initial={{ rotate: 20, scale: 0.7, opacity: 0.3 }}
        className="card h-96 lg:w-80 md:w-60  bg-paleYellow rounded-lg"
        whileHover={{ translateY: "-40px", opacity: 1, scale: 1.1 }}
        whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
      >
        <div className="circle"></div>
      </motion.div>
      <motion.div
        initial={{ rotate: 20, scale: 0.7, opacity: 0.3 }}
        className="card  h-96 lg:w-80 md:w-60  bg-lightgreen rounded-lg"
        whileHover={{ translateY: "-40px", opacity: 1, scale: 1.1 }}
        whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
      >
        <div className="circle"></div>
      </motion.div>
    </div>
  );
}

export default Education;
