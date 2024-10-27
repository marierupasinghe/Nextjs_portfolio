"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-25 bg-black"> 
      <div className="flex flex-col items-center justify-center h-screen"> 
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center" 
        >
          <h1 className="text-white text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-snug mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello,{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "I'm Dewmini", 
                2000,
                "an undergraduate",
                2000,
                "passionate about",
                2000,
                "UI/UX Designing",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl mb-8">
            Crafting intuitive user interfaces with a passion for detail and design. 
            Let&apos;s build experiences that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-300 text-white transition-all duration-300"
            >
              Hire Me
            </Link>
            <a
              href="/Resume.pdf" 
              download="Dewmini_CV.pdf" 
              className="group px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 transition-all duration-300"
            >
              <span className="block bg-black group-hover:bg-slate-800 rounded-full px-6 py-3 text-white">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
