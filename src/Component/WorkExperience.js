import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function WorkExperience() {
  return (
    <div className="flex sm:pt-32 pt-40 sm:gap-40  gap-48  flex-col justify-between items-center">
      <motion.div
        className="bg-pink rounded-full shadow-md w-52   border-3 sm:relative lg:-left-56 md:-left-12  sm:w-96  sm:h-40 h-48 p-4 cursor-pointer"
        initial={{ rotate: -30, scale: 0.8, opacity: 0.8 }}
        whileHover={{ scale: 1.9, opacity: 1 }}
        whileInView={{ rotate: 0, scale: 1.7, opacity: 0.9 }}
        transition={{
          type: "spring",
          damping: 20,
          delay: 0.2,
          duration: 2,
        }}
      >
        <motion.h1
          className="text-lightgreen text-center font-bold "
          style={{ fontFamily: "Open Sans" }}
        >
          Exomoon Infotech
        </motion.h1>
        <motion.p
          className="text-paleYellow text-center pt-2 lg:left-40  "
          style={{ fontSize: "8px", fontFamily: "Open Sans sans-serif" }}
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
        className="bg-pink rounded-full  shadow-md w-52 sm:relative  border-3 lg:left-48 md:left-12 sm:w-96 sm:h-40 h-48 p-4 cursor-pointer"
        initial={{ rotate: -30, scale: 0.8, opacity: 0.8 }}
        whileHover={{ scale: 1.9, opacity: 1 }}
        whileInView={{ rotate: 0, scale: 1.7, opacity: 0.9 }}
        transition={{
          type: "spring",
          duration: 2,
          damping: 20,
          delay: 0.2,
        }}
      >
        <motion.h1
          className="text-lightgreen text-center font-semibold"
          style={{ fontFamily: "Open Sans" }}
        >
          Tvadartham Technology Pvt Ltd.
        </motion.h1>
        <motion.p
          className="text-paleYellow text-center pt-2 "
          style={{ fontSize: "8px", fontFamily: "Open Sans sans-serif" }}
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
