import { AboutContent, HomepageContent } from "../Asset";
import React, { useState } from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="justify-center  min-h-screen  text-pink">
      <div class="wrap ml-5 mr-5">
        <div class="secStart" data-text="about">
          <h1 class="secHead">about</h1>

          <div class="secContent max-w-xl mb-16  ">
            {/* convert css to tailwindcss     */}

            <p className="font-light italic text-green text-2xl md:text-3xl leading-10 md:leading-12 pb-1 mt-0 mb-n1">
              I’m a front-end web developer with over a decade of experience. I
              work with agencies across the globe to create high performance
              &amp; rich interactive websites that work across all platforms
              &amp; devices.
            </p>
            <div>
              <p
                className="pt-5 text-lightyellow  text-lg font-semibold
lineHeight: 2rem;"
              >
                Although I'm very familiar with using frameworks, my websites
                are primarily hand-coded using{" "}
              </p>
              <p
                className="pt-5 text-lightyellow text-lg font-semibold
lineHeight: 2rem;"
              >
                With a strong emphasis on "Progressive Enhancement", I look for
                creative ways to push the boundaries of website front-end code
                without compromising on browser support and performance.
              </p>
              <p
                className="pt-5 text-green text-lg font-semibold
lineHeight: 2rem;"
              >
                In a quest for always keeping myself updated, I read books and
                attend conferences &amp; meetups.
              </p>
            </div>
          </div>
          {/* cv resume */}
          <a
            href="cv.pdf"
            target="_blank"
            class="btn-box text-white border-green border font-semibold border-1 px-20 py-3 mt-10 hover:bg-white  hover:text-green"
          >
            Curriculum Vitae (PDF)
          </a>
        </div>
        <div class="secEnd" data-text="about"></div>
      </div>
    </div>
  );
}

export default About;
