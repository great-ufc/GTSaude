"use client"

import React, { useState } from 'react';
import Image from 'next/image'
import HeroBanner2 from '../../assets/HeroBanner2.svg'
import HeroBanner1 from '../../assets/HeroBanner.svg'

const HeroSection2 = () => {

    const heroBanners = [HeroBanner1, HeroBanner2];

    const [currentIndex, setCurrentIndex] = useState(0);

    const [direction, setDirection] = useState('next'); 

    // Função para avançar
    const nextImage = () => {
        setDirection('next');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroBanners.length);
    };

    // Função para voltar
    const prevImage = () => {
        setDirection('prev');
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + heroBanners.length) % heroBanners.length
        );
    };


    return (
        <div className="relative overflow-hidden items-center mx-auto md:w-fit h-full max-h-[80vh] bg-white">
            <div
                className={`flex transition-transform duration-700 ease-in-out ${
                    direction === 'next' ? '-translate-x-full' : 'translate-x-full'
                }`}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {heroBanners.map((banner, index) => (
                    <div key={index} className="min-w-full h-full">
                        <Image
                            className="md:w-full h-full object-cover"
                            src={banner}
                            alt={`Hero banner ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            <button
        className="md:flex  hidden bottom-0 -left-10 top-0 z-[1] md:absolute w-[15%] items-center justify-center text-white opacity-100"
        onClick={prevImage}
        
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
        onClick={nextImage}
        
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
};

export default HeroSection2;