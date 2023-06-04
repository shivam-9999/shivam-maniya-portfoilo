import React from "react";
// import { AboutContent } from "../Asset";
// /Users/shivammaniya/shivam-maniya-portfoilo/src/Asset/Images
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { motion } from "framer-motion";

function ContactInformation() {
  const vibrationVariants = {
    initial: { x: 0 },
    vibrate: {
      x: [-15, 15, -15, 15, 0],
      transition: { duration: 0.3 },
    },
  };
  return (
    <div className="min-h-screen text-white md:ml-24 sm:mx-auto secContent">
      <h1> Contact Me </h1>
      <p className="mt-5 font-bold">
        Feel free to send an e-mail on{" "}
        <a
          className="text-md text-xxl"
          style={{
            textDecoration: "underline",
          }}
          href="shivammaniya7469@gmail.com"
        >
          shivammaniya7469@gmail.com
        </a>
        <motion.div
          whileHover="vibrate"
          variants={vibrationVariants}
          className="icon-container border-2 mt-16 p-24 mx-auto border-green"
        >
          <BsFillTelephoneInboundFill
            color="#2d9687"
            className="teleIcon mx-auto"
          />
        </motion.div>
      </p>
    </div>
  );
}

export default ContactInformation;
