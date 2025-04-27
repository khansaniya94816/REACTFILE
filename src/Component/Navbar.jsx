import React from "react";
import Image from "../Assets/Kc_Logo.svg"; 
import image from "../Assets/vedioiconsnew.svg";
import Arrow from "../Assets/Down_arrow.svg.png";

function Navbar({ onStudyClick, onServicesClick }) {
  return (
    <div className="bg-blue-600 text-white">
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-10 py-4 gap-4 md:gap-0">
        
        <img src={Image} alt="Logo" className="w-24 sm:w-28 md:w-32" />

        <ul className="flex flex-col md:flex-row items-center gap-2 sm:gap-4 text-sm sm:text-base font-medium text-center">
          <li
            className="cursor-pointer hover:text-orange-500 transition-colors flex items-center"
            onClick={onStudyClick}
          >
            Study Destinations
            <img src={Arrow} alt="Dropdown" className="w-4 sm:w-5 h-4 sm:h-5 ml-1" />
          </li>
          <li
            className="cursor-pointer hover:text-orange-500 transition-colors flex items-center"
            onClick={onServicesClick}
          >
            Services
            <img src={Arrow} alt="Dropdown" className="w-4 sm:w-5 h-4 sm:h-5 ml-1" />
          </li>
          <li className="hover:text-orange-500">Upcoming Events</li>
          <li className="hover:text-orange-500">Contact Us</li>
          <li className="hover:text-orange-500">Company</li>
        </ul>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full md:w-auto">
          <button className="border border-white bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-md font-bold text-sm w-full sm:w-auto text-center">
            coursefinder.ai
            <span className="block text-[10px] mt-[-2px]">(For partners)</span>
          </button>
          <button className="flex items-center justify-center gap-2 border border-white bg-white text-red-500 px-4 py-2 rounded-lg font-semibold shadow-md w-full sm:w-auto">
            <img src={image} alt="Video Icon" className="w-5 h-5" />
            Book Online Counselling
          </button>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;
