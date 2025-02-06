"use client";

import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface LeftSectionProps {
  animationComplete: boolean;
}
interface animatedTextProps {
  text: string;
  className: string;
}

const Main = ({ animationComplete }: LeftSectionProps) => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.3, // Start text animation slightly before curtain animation ends
      },
    },
  };
  const textVariants = {
    initial: {
      opacity: 0,
      x: -20,
      scaleX: 0.9,
      scaleY: 1.1,
    },
    animate: {
      opacity: 1,
      x: 0,
      scaleX: 1,
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1], // Easing function for a smooth, slightly bouncy effect
        delay: 2.5, // Start text animation slightly before curtain animation ends
      },
    },
  };

  const wordVariants = {
    initial: {
      opacity: 0,
      x: 20, // Start slightly to the right
      rotateX: 90, // Start rotated on the X-axis
    },
    animate: {
      opacity: 1,
      x: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  const AnimatedText = ({ text, className }: animatedTextProps) => (
    <motion.span className={`inline-block ${className}`}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block pr-2 mb-8"
          variants={wordVariants}
        >
          {`${word} `}
        </motion.span>
      ))}
    </motion.span>
  );

  const handleButtonClick = () => {
    const element = document.getElementById("contactMe");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="sticky top-0 pb-12 h-full"
      variants={containerVariants}
      initial="initial"
      animate={animationComplete ? "animate" : "initial"}
    >
      <div className="flex flex-col items-center w-full h-full justify-center">
        <h1 className="text-5xl font-semibold leading-7 text-main-300 mb-4">
          <AnimatedText
            text="Hi! I'm Darryl, a freelance software engineer."
            className="block"
          />
        </h1>
        <motion.div
          variants={textVariants}
          initial="initial"
          animate={animationComplete ? "animate" : "initial"}
        >
          <p className="text-main-300 mb-6">
            From automating mundane tasks to building full-scale business
            applications, I help individuals and businesses bring their ideas to
            life!
          </p>
          <button
            onClick={handleButtonClick}
            className="py-4 px-6 md:px-8 font-semibold rounded-3xl text-main-300 bg-main-600 border-main-300 border-2 hover:bg-main-300 hover:text-textMain-100 transition-all ease-in-out"
          >
            Let&apos;s Work Together!
          </button>
          <div className="flex space-x-4 mt-6">
            <a
              href="https://github.com/xsatire"
              className="text-slate-100 hover:text-white transition-colors"
              target="_blank"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/darryl-yang-73877b348/"
              className="text-slate-100 hover:text-white transition-colors"
              target="_blank"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-slate-100 hover:text-white transition-colors"
              target="_blank"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Main;
