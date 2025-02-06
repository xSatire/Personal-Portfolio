"use client";

import { useSyncScroll } from "@/hooks/useSyncScroll";
import LeftSection from "./_components/leftSection";
import RightSection from "./_components/rightSection";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const { leftRef, rightRef } = useSyncScroll(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Trigger animation completion after a delay
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 500); // Adjust this value to match your animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lg:flex h-screen w-screen overflow-hidden">
      <motion.div
        className="hidden lg:h-screen w-1/2 bg-main-600 lg:flex flex-col overflow-y-auto z-50 fixed"
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      />
      <LeftSection scrollRef={leftRef} animationComplete={animationComplete} />
      <RightSection
        scrollRef={rightRef}
        animationComplete={animationComplete}
      />
    </div>
  );
}
