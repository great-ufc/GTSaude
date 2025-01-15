"use client";
import { useState } from "react";

export default function HeroSection(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const images: string[] = [
    "https://i.imgur.com/Wlobp2f.png",
    "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/044.webp",
    
  ];

  const handleNext = (): void => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = (): void => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative" id="HeroSection">
      <div className="relative w-full overflow-hidden">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className={`block w-full transition-transform duration-500 ease-in-out ${
              index === activeIndex ? "block" : "hidden"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        className="absolute bottom-0 -left-10 top-0 z-[1] flex w-[15%] items-center justify-center text-white opacity-100"
        onClick={handlePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-7 w-7 bg-primary-blue rounded-full px-1 py-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        className="absolute bottom-0 -right-10 top-0 z-[1] flex w-[15%] items-center justify-center text-white opacity-100"
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-7 w-7 bg-primary-blue rounded-full px-1 py-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}