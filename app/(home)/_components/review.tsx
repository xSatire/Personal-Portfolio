"use client";

import { useState, useCallback } from "react";
import { useSwipeable } from "react-swipeable";

interface Review {
  id: number;
  author: string;
  title: string;
  content: string;
}

const reviews: Review[] = [
  {
    id: 1,
    author: "Its21Master",
    title: "Music Producer, CEO of Musixtica",
    content:
      "Darryl is an invaluable asset to our company. Having collaborated on multiple projects, I have seen firsthand his commitment to delivering consistently high-quality work.",
  },
  {
    id: 2,
    author: "Cheryl Koh",
    title: "Founder of CSC By Cheryl",
    content:
      "Darryl was incredibly thorough and professional in bringing our websites to life. He delivered an outstanding UI/UX and seamlessly integrated transactions using our local payment method.",
  },
  {
    id: 3,
    author: "Jackson Tan",
    title: "Head of Development, RSA",
    content:
      "Working with Darryl over the past two years has been a pleasure. He developed a fully autonomous program that streamlined our monthly tasks and consistently went above and beyond to ensure smooth operations.",
  },
];

export default function Review() {
  const [currentReview, setCurrentReview] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const goToNextReview = useCallback(() => {
    setDirection("left");
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  }, []);

  const goToPreviousReview = useCallback(() => {
    setDirection("right");
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: goToNextReview,
    onSwipedRight: goToPreviousReview,
    trackMouse: true,
  });

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-4">
      <div {...handlers} className="w-full overflow-hidden">
        <div className="mb-6 relative">
          <div
            key={currentReview}
            className={`w-full h-[33rem] md:h-80 transition-all duration-300 ease-in-out ${
              direction === "left"
                ? "animate-slide-left"
                : "animate-slide-right"
            }`}
          >
            <div className="h-full w-full flex flex-col justify-end pb-2">
              <p className="text-textMain-200 font-semibold mb-6 md:mb-8 text-2xl tracking-tight md:text-3xl leading-8">
                &quot;{reviews[currentReview].content}&quot;
              </p>
              <div className="flex flex-col justify-start items-start">
                <span className="text-textMain-200 font-semibold text-lg">
                  {reviews[currentReview].author}
                </span>
                <span className="text-textMain-100 font-light text-md">
                  {reviews[currentReview].title}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentReview ? "left" : "right");
                setCurrentReview(index);
              }}
              className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-200 ease-in-out ${
                currentReview === index
                  ? "bg-slate-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`View review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
