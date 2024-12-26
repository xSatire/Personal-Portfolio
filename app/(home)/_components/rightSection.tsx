"use client";

import { motion } from "framer-motion";
import Profile from "./profile";
import About from "./about";
import Review from "./review";

interface RightSectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const sections = [
  {
    title: "About Me",
    content:
      "I'm a full stack developer with a passion for creating intuitive and dynamic user experiences...",
  },
  {
    title: "Skills",
    content: "JavaScript, React, Node.js, Python, SQL, MongoDB, AWS...",
  },
  {
    title: "Projects",
    content:
      "E-commerce platform, Social media dashboard, Machine learning model for predictive analytics...",
  },
  {
    title: "Experience",
    content:
      "Senior Developer at Tech Co. (2018-Present), Web Developer at StartUp Inc. (2015-2018)...",
  },
  {
    title: "Education",
    content: "BS in Computer Science, University of Technology (2011-2015)",
  },
];

export default function RightSection({ scrollRef }: RightSectionProps) {
  return (
    <motion.div
      ref={scrollRef}
      className="h-screen w-1/2 overflow-y-auto bg-main-300"
    >
      <About />
      <Profile />
      <Review />
    </motion.div>
  );
}
