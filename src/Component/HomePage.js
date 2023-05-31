import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HomepageContent } from "../Asset/index";

const HomePage = () => {
  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    // Typing animation logic for first element
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < HomepageContent[0].length && !isTypingComplete) {
        setText((prevText) => prevText + HomepageContent[0].charAt(index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
        setShowSecondText(true); // Start displaying the second text
      }
    }, 70);

    return () => clearInterval(typingInterval);
  }, []);

  // JSX code rendering the component
  return (
    <div className="flex  justify-center flex-col h-screen text-7xl text-pink">
      <div
        style={{
          fontFamily: "'Nunito', sans-serif;",

          position: "relative",

          bottom: "10px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {text}
      </div>
      {showSecondText && (
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
        >
          {HomepageContent[1]}
        </motion.p>
      )}
    </div>
  );
};

export default HomePage;
