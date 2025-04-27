import React from "react";
import Image from "../Assets/National.jpg";
import image from "../Assets/Berkeley.png";
import Img from "../Assets/UNSW.png";
import img from "../Assets/Asia.jpg";
import Gill from "../Assets/McGill.jpg";
import Monash from "../Assets/Monash.png";
import Queens from "../Assets/Queensland.png";
import BRISTOL from "../Assets/BRISTOL.jpg";
import arrow from "../Assets/right-arrow.svg";

function Eminent() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center my-10">
        <h1 className="text-4xl sm:text-5xl font-semibold">KC’s Eminent University Tie-Ups</h1>
        <p className="text-lg text-gray-600 mt-2">
          We represent 69 of the World’s Top 300 Universities according to QS World Rankings 2025
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {[Image, image, Img, img, Gill, Monash, Queens, BRISTOL].map((src, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 border-gray-300"
          >
            <img src={src} alt={`University ${index}`} className="w-full h-auto max-w-[150px] object-contain" />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <div className="inline-flex items-center gap-1 text-[#FD6D63] font-medium cursor-pointer">
          <span>More universities</span>
          <img src={arrow} alt="Arrow" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default Eminent;
