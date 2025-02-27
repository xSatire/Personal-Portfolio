"use client";

import { useState, useCallback } from "react";

interface CompanyCardProps {
  companyName: string;
  hoverText: string;
  hoverTitle: string;
}

export default function CompanyCard({
  companyName,
  hoverText,
  hoverTitle,
}: CompanyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div
      className={`relative overflow-hidden transition-colors duration-300 ease-in-out ${
        isHovered ? "bg-main-300" : "bg-main-700"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden={isHovered}
      >
        <span className="text-black text-lg md:text-xl font-bold text-center">
          {companyName}
        </span>
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!isHovered}
      >
        <span className="font-bold animate-float-in flex flex-col justify-center items-center space-y-3 w-full h-full px-6 py-8 lg:px-10 lg:py-12">
          <div className="md:text-lg font-semibold text-textMain-200">
            {hoverTitle}
          </div>
          <div className="text-sm md:text-base text-textMain-100 font-light tracking-tight">
            {hoverText}
          </div>
        </span>
      </div>
    </div>
  );
}
