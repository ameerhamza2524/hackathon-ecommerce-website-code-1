"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative bg-white">
      {/* Left Section (Text) */}
      <div className="relative flex flex-col justify-center px-4 sm:px-10 lg:pl-20 py-10 lg:py-20 z-20 max-w-xl text-black">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4">
          Find Clothes <br /> That Matches Your Style
        </h1>
        <p className="text-sm sm:text-base lg:text-lg mb-6">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-medium">
          Shop Now
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="absolute top-0 right-0 w-full h-[300px] sm:h-[400px] lg:h-[560px]">
        <Image
          src="/images/Rectangle-2.png"
          alt="Fashion Model"
          width={900}
          height={800}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Brands Section */}
      <div className="overflow-hidden bg-black text-white py-6 mt-10">
        <div className="flex items-center animate-scroll space-x-10">
          <img
            src="/images/versace.png"
            alt="Versace"
            className="h-5 sm:h-6 lg:h-7 object-contain"
          />
          <img
            src="/images/zara.png"
            alt="Zara"
            className="h-5 sm:h-6 lg:h-7 object-contain"
          />
          <img
            src="/images/gucci.png"
            alt="Gucci"
            className="h-5 sm:h-6 lg:h-7 object-contain"
          />
          <img
            src="/images/prada.png"
            alt="Prada"
            className="h-5 sm:h-6 lg:h-7 object-contain"
          />
          <img
            src="/images/calvin-klein.png"
            alt="Calvin Klein"
            className="h-5 sm:h-6 lg:h-7 object-contain"
          />

          {/* Duplicate images for seamless looping */}
          <img
            src="/images/versace.png"
            alt="Versace"
            className="h-5 sm:h-6 lg:h-7 object-contain"
          />
          <img
            src="/images/zara.png"
            alt="Zara"
            className="h-5 sm:h-6 lg:h-7 object-contain"
          />
          <img
            src="/images/gucci.png"
            alt="Gucci"
            className="h-5 sm:h-6 lg:h-7 object-contain"
          />
          <img
            src="/images/prada.png"
            alt="Prada"
            className="h-5 sm:h-6 lg:h-7 object-contain"
          />
          <img
            src="/images/calvin-klein.png"
            alt="Calvin Klein"
            className="h-5 sm:h-6 lg:h-7 object-contain"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          display: inline-flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
