"use client";

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
      className="h-screen hidden lg:w-1/2 bg-main-600 p-12 lg:flex flex-col overflow-y-auto"
    >
      <Main animationComplete={animationComplete}></Main>
    </div>
  );
}
