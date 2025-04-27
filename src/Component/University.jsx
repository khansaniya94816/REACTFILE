import React from "react";
import Image from "../Assets/Home_4.svg"; 
import image from "../Assets/images.png"; 
import arrow from "../Assets/right-arrow.svg";

function University() {
  return (
    <div className="bg-[#E8DAF8] p-6 sm:p-8 md:p-12 rounded-lg relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        
        <div className="w-full lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
          <div className="absolute -z-10 left-1/2 lg:left-10 top-1/2 transform -translate-y-1/2 translate-x-1/2 lg:translate-x-0 bg-[#C7A3E2] rounded-full w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72"></div>
          <img
            src={Image}
            alt="Universities"
            className="w-72 sm:w-80 lg:w-90 h-auto object-cover relative z-10 ml-0 lg:ml-20"
          />
        </div>

        <div className="w-full lg:w-1/2 pl-4 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            For Universities
          </h2>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">
            Maximize your reach across geographies and exceed your student recruitment goals without compromising on quality.
          </p>

          <div className="mt-6 space-y-4">
            {[
              "Recruit students from diverse nationalities",
              "Access to KC’s extensive recruitment network",
              "Enhance brand visibility",
            ].map((text, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg overflow-hidden">
                  <img src={image} alt="Star Icon" className="w-4 h-6 object-contain" />
                </div>
                <p className="text-gray-900 text-sm sm:text-base">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 inline-flex items-center gap-1 text-[#FD6D63] font-medium cursor-pointer">
            <span>See More</span>
            <img src={arrow} alt="Arrow" className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default University;
