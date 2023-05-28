import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function WorkExperience() {
  return (
    <div className="flex sm:pt-32 pt-40 sm:gap-40  gap-48  flex-col justify-between items-center">
      <motion.div
        className="bg-white rounded-full shadow-md w-52  border-x-yellow-500 border-4 sm:relative md:-left-40 sm:w-96  sm:h-40 h-48 p-4 cursor-pointer"
        initial={{ scale: 0.2, opacity: 0.9 }}
        whileHover={{ scale: 2, opacity: 1 }}
        animate={{ rotate: 360, scale: 1.5 }}
        transition={{
          type: "spring",
          damping: 20,
          delay: 0.1,
          duration: 2,
        }}
      >
        <motion.h1 className="text-green text-center font-semibold">
          Exomoon Infotech
        </motion.h1>
        <motion.p
          className="text-black text-center pt-2 md:left-40"
          style={{ fontSize: "8px" }}
        >
          Developed web applications using MERN Stack ( MongoDb, Express JS,
          AngularJS, Node.js ), Typescript, Redux , Redux-Saga,Redux-Thunk,
          React Router, React Views, Virtual DOM, GraphQl, HTML5, CSS, Bootstrap
          Tailwind CSS, following agile and Test-driven development methodology.
          Engineered REST API with Node.js(express.js), GraphQL, MongoDB for
          complex Online Live Video Streaming services with thehelp of Zixi,
          Akamai, and Tri-caster. Handled backend with AWS (lambda, API Gateway,
          VPC) services and integrated GraphQL for fast and flexible data
          retrieval.
        </motion.p>
        {/* Card content goes here */}
      </motion.div>
      <motion.div
        className="bg-white rounded-full shadow-md w-52 sm:relative  border-x-yellow-500 border-4 sm:left-20 sm:w-96 sm:h-40 h-48 p-4 cursor-pointer"
        initial={{ scale: 0.2, opacity: 0.9 }}
        whileHover={{ scale: 2, opacity: 1 }}
        animate={{ rotate: 360, scale: 1.5, opacity: 0.9 }}
        transition={{
          type: "spring",
          // stiffness: -320,
          damping: 20,
          delay: 0.1,
        }}
      >
        <motion.h1 className="text-green text-center font-semibold">
          Tvadartham Technology Pvt Ltd.
        </motion.h1>
        <motion.p
          className="text-black text-center pt-2 "
          style={{ fontSize: "8px" }}
        >
          Developed web applications using MERN Stack ( MongoDb, Express JS,
          AngularJS, Node.js ), Typescript, Redux , Redux-Saga,Redux-Thunk,
          React Router, React Views, Virtual DOM, GraphQl, HTML5, CSS, Bootstrap
          Tailwind CSS, following agile and Test-driven development methodology.
          Engineered REST API with Node.js(express.js), GraphQL, MongoDB for
          complex Online Live Video Streaming services with thehelp of Zixi,
          Akamai, and Tri-caster. Handled backend with AWS (lambda, API Gateway,
          VPC) services and integrated GraphQL for fast and flexible data
          retrieval.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default WorkExperience;
