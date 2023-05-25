import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AboutMe, hello } from "../Asset/index";

const About = () => {
  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < AboutMe[0].length) {
        setText((prevText) => prevText + AboutMe[0].charAt(index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <motion.h1
        style={{ fontFamily: "'Nunito', sans-serif;", color: "white" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default About;
