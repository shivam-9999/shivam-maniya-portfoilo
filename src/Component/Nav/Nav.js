import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { BiLeftArrow } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navbarVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%" },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const listItemContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2, // Adjust the delay between list items here
      },
    },
  };

  return (
    <div className="relative">
      <button
        className="fixed top-4 right-4 z-50 bg-gray-800 rounded p-2 focus:outline-none"
        onClick={toggleNavbar}
      >
        {isOpen ? (
          <BiLeftArrow className="h-6 w-6 text-lightyellow" />
        ) : (
          <FiMenu className="h-6 w-6 text-lightyellow" />
        )}
      </button>

      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-100 flex items-center justify-center z-40"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={navbarVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.ul
            className="flex flex-col gap-8 text-4xl leading-8 my-12"
            style={{ color: "white" }}
            variants={listItemContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={listItemVariants}>Home</motion.li>
            <motion.li variants={listItemVariants}>About</motion.li>
            <motion.li variants={listItemVariants}>Services</motion.li>
            <motion.li variants={listItemVariants}>Contact</motion.li>
          </motion.ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
