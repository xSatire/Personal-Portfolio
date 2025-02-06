"use client";

import { motion } from "framer-motion";

export function AnimatedScrollArrow() {
  return (
    <div>
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="flex justify-center items-center"
      >
        <div className="font-bold mr-6">Past Achievements</div>
        <div className="transform -translate-x-1/2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <motion.path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                repeat: 0,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
