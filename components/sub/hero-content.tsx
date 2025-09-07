"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      id="about-me"
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        {/* Role Box */}
        <motion.div
          variants={slideInFromTop}
          className="flex items-center justify-center md:justify-start gap-2 py-[6px] px-[6px] border border-[#7042f88b] opacity-[0.9] rounded-lg max-w-fit mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
          <h1 className="text-[12px] md:text-[13px] text-gray-200 font-semibold">
            Embedded Engineer | Robotics & IoT Developer
          </h1>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Sanjai S
          </span>
          <br />
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Robots
          </span>{" "}
          and Smart{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            IoT Systems
          </span>{" "}
          for the Future
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-3 sm:my-4 max-w-[800px] mx-auto md:mx-0"
        >
          I’m a passionate engineer exploring the world of Robotics, IoT, AI, and App Development. 
          From building humanoid and mobile robots to designing smart automation with ESP32, Raspberry Pi, and AI voice systems, 
          I love creating technology that interacts with people in meaningful ways. Skilled in robotics design, IoT platforms, and Flutter apps, 
          I aim to bridge humans and machines through innovation and creativity.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="py-4 px-5 sm:px-6 bg-transparent border-[#7D43FF] border-2 text-white text-base sm:text-base font-medium rounded-full shadow-lg transition-transform hover:scale-105 max-w-[140px] sm:max-w-[200px] mx-auto md:mx-0 flex items-center justify-center"
        >
          View Projects
        </motion.a>
      </div>
    </motion.div>
  );
};
