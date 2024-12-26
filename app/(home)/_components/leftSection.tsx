"use client";

import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Main from "./main";
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
  return (
    <div
      ref={scrollRef}
      className="h-screen w-1/2 bg-main-600 p-12 flex flex-col overflow-y-auto z-50"
    >
      <Main animationComplete={animationComplete}></Main>
    </div>
  );
}
