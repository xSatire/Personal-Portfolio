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
        <span className="text-black text-xl font-bold">{companyName}</span>
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!isHovered}
      >
        <span className="font-bold animate-float-in flex flex-col justify-start items-start space-y-3 w-full h-full px-6 py-8 lg:px-10 lg:py-12">
          <div className="text-lg font-semibold text-textMain-200">
            {hoverTitle}
          </div>
          <div className="text-textMain-100 font-light tracking-tight">
            {hoverText}
          </div>
        </span>
      </div>
    </div>
  );
}
