"use client";

import { motion } from "framer-motion";
import Profile from "./profile";
import About from "./about";
import Picture from "./picture";
import Achievements from "./achievements";
import Contact from "./contact";
import Main from "./main";

interface RightSectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
  animationComplete: boolean;
}

export default function RightSection({
  scrollRef,
  animationComplete,
}: RightSectionProps) {
  return (
    <motion.div
      ref={scrollRef}
      className="h-screen w-full lg:w-1/2 overflow-y-auto bg-main-300"
    >
      <div className="h-screen sticky top-0 lg:hidden bg-main-600 p-12 overflow-y-auto">
        <Main animationComplete={animationComplete} />
      </div>
      <Picture />
      <About />
      <Achievements />
      {/* <Profile /> develop when I have up and running websites*/}
      <Contact />
    </motion.div>
  );
}
