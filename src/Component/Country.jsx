import React from "react";
import image from "../Assets/multi_country_.svg";
import arrow from "../Assets/right-arrow.svg";

function Country() {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between px-6 lg:px-12 py-10 lg:py-20">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-10 lg:mb-0">
        <img
          src={image}
          alt="Multi Country Advantage"
          className="w-80 h-auto object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 pl-0 lg:pl-10 text-center lg:text-left">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
          KC’s Multi Country Advantage
        </h2>
        <h3 className="text-2xl sm:text-3xl text-black mt-6 lg:mt-8">
          The World is your Campus!
        </h3>
        <p className="text-black font-medium text-lg sm:text-xl mt-8 lg:mt-10">
          Aspire for more. Choose what suits you the best from 800+ global universities in 33 countries, world over.
          The choices and opportunities our universities offer are endless!
        </p>
        <div className="mt-6 inline-flex items-center gap-1 text-[#FD6D63] font-medium cursor-pointer">
          <span>Explore Countries</span>
          <img src={arrow} alt="Arrow" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default Country;
