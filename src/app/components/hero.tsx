import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#F2F0FF] py-10 px-6 h-auto flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <Image src="/bulb.png" alt="bulb image" width={350} height={350} className="mx-auto md:mx-0" />

          <p className="text-sm text-pink-600 mt-4">Best Furniture For Your Castle...</p>

          <h1 className="font-bold text-gray-800 mt-2 text-3xl sm:text-4xl md:text-5xl">
            New Furniture Collection <br /> Trends in 2020
          </h1>

          <p className="text-sm text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.
          </p>

          <button className="mt-6 sm:mt-2 bg-pink-500 text-white py-2  px-4 rounded hover:bg-pink-600">
            Shop Now
          </button>
        </div>

        {/* Image Content */}
        <div className="relative flex justify-center items-center">
          <div className="w-full max-w-sm  h-64 mt-0 sm:mt-5 bg-gray-200 rounded-lg flex items-center justify-center">
            <Image src="/sofachair.png" alt="sofachair image" width={500} height={500} className="rounded-lg " />
          </div>

          <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            50% off
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;