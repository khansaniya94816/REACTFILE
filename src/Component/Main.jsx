import React from "react";
import Image from "../Assets/Home_Frenchisee.svg";
import image from "../Assets/images.png";
import arrow from "../Assets/right-arrow.svg";

function Main() {
  return (
    <div className="bg-[#DDEBFF] p-6 sm:p-8 md:p-12 rounded-lg relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        
        <div className="w-full lg:w-1/2 pl-0 lg:pl-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            For Franchisees
          </h2>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">
            Kickstart your business by joining the fastest growing and most trusted EdTech brand in the overseas education industry.
          </p>

          <div className="mt-6 space-y-4">
            {[
              "Business solutions tailor made for your market",
              "Support for Operations, Events and Marketing",
              "Access to KCs rich Knowledge Repository",
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

        <div className="w-full lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
          <div className="absolute -z-10 right-1/2 lg:right-10 top-1/2 transform -translate-y-1/2 translate-x-1/2 lg:translate-x-0 bg-[#B7D4FF] rounded-full w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72"></div>
          <img
            src={Image}
            alt="Franchisee"
            className="w-60 sm:w-72 lg:w-80 h-auto object-cover relative z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
