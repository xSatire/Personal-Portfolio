"use client";

import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface LeftSectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
  animationComplete: boolean;
}
interface animatedTextProps {
  text: string;
  className: string;
}

export default function LeftSection({
  scrollRef,
  animationComplete,
}: LeftSectionProps) {
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
        delay: 5, // Start text animation slightly before curtain animation ends
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
          className="inline-block pr-2"
          variants={wordVariants}
        >
          {`${word} `}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <div
      ref={scrollRef}
      className="h-screen w-1/2 bg-gray-900 text-white p-12 flex flex-col overflow-y-auto z-50"
    >
      <motion.div
        className="sticky top-0 pb-12"
        variants={containerVariants}
        initial="initial"
        animate={animationComplete ? "animate" : "initial"}
      >
        <Image
          src="/placeholder.svg?height=150&width=150"
          width={150}
          height={150}
          alt="Profile"
          className="rounded-full mb-6"
        />
        <h1 className="text-4xl font-bold text-white mb-4">
          <AnimatedText text="Welcome to My Portfolio" className="block" />
        </h1>
        <motion.div
          variants={textVariants}
          initial="initial"
          animate={animationComplete ? "animate" : "initial"}
        >
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <h2 className="text-xl text-gray-400 mb-6">Full Stack Developer</h2>
          <p className="text-gray-300 mb-6">
            Passionate about creating beautiful and functional web applications.
            With 5 years of experience in both front-end and back-end
            development.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
