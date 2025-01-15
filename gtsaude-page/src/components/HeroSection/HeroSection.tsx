"use client";

import { useState, useEffect } from "react";
import Papa from "papaparse";

const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhKX1VJ83ns6ujBStRVJvLSqallRt2jK9vsfXICRZOJMQxNzIvb4EA3rOG9kGpkhAh8GPogIuVUNj3/pub?gid=191788225&single=true&output=csv";

interface Images {
  Id?: string;
  Evento?: string;
  Link?: string;
}

const HeroSection:  React.FC = () => {

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [imagesData, setImagesData] = useState<Images[]>([]);

 

 // Fetch data
  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse<Images>(data, { header: true });
        console.log("Parsed Data:", parsedData.data); // Verifique os dados aqui

        setImagesData(parsedData.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const handleNext = (): void => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
  };

  const handlePrev = (): void => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? imagesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative" id="HeroSection">
      <div className="relative w-full overflow-hidden">
        {imagesData.length === 0 ? (
          <p>Loading images...</p>
        ) : (
          imagesData.map((src, index) => (
            <img
              key={index}
              src={src.Link}
              className={`block bg-cover w-full transition-transform duration-500 ease-in-out ${
                index === activeIndex ? "block" : "hidden"
              }`}
              alt={`Slide ${index + 1}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ))
        )}
      </div>

      <button
        className="md:flex  hidden bottom-0 -left-10 top-0 z-[1] md:absolute w-[15%] items-center justify-center text-white opacity-100"
        onClick={handlePrev}
        disabled={imagesData.length === 0}
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
        className="md:flex md:absolute hidden bottom-0 -right-10 top-0 z-[1]  w-[15%] items-center justify-center text-white opacity-100"
        onClick={handleNext}
        disabled={imagesData.length === 0}
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

export default HeroSection;