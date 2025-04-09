import React from "react";
import Image from "../Assets/Kc_Logo.svg"; 
import image from "../Assets/vedioiconsnew.svg"
import Arrow from "../Assets/Down_arrow.svg.png"

function Navbar() {
  return (
    <div className="bg-blue-600 text-white">
      <nav className="flex justify-between items-center px-10 py-4">
        
        <img src={Image} alt="Logo" className="w-32" />
        <ul className="flex items-center gap-4 text-base font-medium">
  <li className="cursor-pointer hover:text-orange-500 transition-colors flex items-center">
    Study Destinations
    <img src={Arrow} alt="" className="w-8 h-8 ml-1 hover:text-orange-500 transition-colors" /> 
  </li>
  <li className="cursor-pointer hover:text-orange-500 transition-colors flex items-center">
    Services
    <img src={Arrow} alt="" className="w-8 h-8 ml-1 hover:text-orange-500 transition-colors" />
  </li>
  <li className="cursor-pointer hover:text-orange-500 transition-colors">Upcoming Events</li>
  <li className="cursor-pointer hover:text-orange-500 transition-colors">Contact Us</li>
  <li className="cursor-pointer hover:text-orange-500 transition-colors">Company
    
  </li>
</ul>
        <div className="space-x-4 flex justify-between hover:effect-orange-500">
        <button className="border border-white bg-blue-600  text-white px-6 py-2 rounded-md font-bold text-sm leading-tight w-44">
  coursefinder.ai  
  <span className="block text-[10px] mt-[-2px]">(For partners)</span>
</button>
          <button className="flex items-center gap-2 border border-white bg-white text-red-500 px-4 py-2 rounded-lg font-semibold shadow-md">
  <img src={image} alt="Video Icon" className="w-5 h-5" />
  Book Online Counselling
</button>

        </div>
      </nav>

     
    </div>
  );
}

export default Navbar;
