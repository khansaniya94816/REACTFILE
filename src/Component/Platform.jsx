import React from "react";
import Image from "../Assets/course.png";
import TickIcon from "../Assets/image.png"; 
import arrow from "../Assets/right-arrow.svg";

function Platform() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 bg-white min-h-screen">
      <h1 className="text-4xl font-semibold text-gray-900 text-center mb-8">
        KC’s Tech Advantage Sophisticated <br /> Online Platforms
      </h1>
      
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
        
        <div className="max-w-lg mb-8 md:mb-0">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            KC’s Tech Prowess <span className="text-gray-900">coursefinder.ai</span> - An Uber-Efficient Online Platform
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Welcome to coursefinder.ai, an uber-efficient online platform for searching courses and managing applications!
          </p>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-center"><img src={TickIcon} alt="Tick" className="w-10 h-10 mr-2" /> Search Near Perfect, ‘eligible’ courses</li>
            <li className="flex items-center"><img src={TickIcon} alt="Tick" className="w-10 h-10 mr-2" /> ‘One’ application, ‘multiple’ courses & universities</li>
            <li className="flex items-center"><img src={TickIcon} alt="Tick" className="w-10 h-10 mr-2" /> Project commissions and process applications</li>
            <li className="flex items-center"><img src={TickIcon} alt="Tick" className="w-10 h-10 mr-2" /> Submit & manage unlimited applications</li>
            <li className="flex items-center"><img src={TickIcon} alt="Tick" className="w-10 h-10 mr-2" /> Enhance revenues through ancillary services</li>
          </ul>
          <div className="mt-6 inline-flex items-center gap-1 text-[#FD6D63] font-medium cursor-pointer">
            <span>coursefinder.ai</span>
            <img src={arrow} alt="Arrow" className="w-4 h-4" />
          </div>
        </div>
        
        <div className="relative w-full md:w-[550px]">
          <img src={Image} alt="Course Finder" className="w-full rounded-lg shadow-lg" />
          <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg w-72 md:w-72">
            <h3 className="text-gray-900 font-bold text-lg mb-3">Explore over 1,00,000+ courses</h3>
            <input type="text" placeholder="Course name" className="w-full border p-2 rounded mb-2" />
            <input type="text" placeholder="Study Level" className="w-full border p-2 rounded mb-2" />
            <input type="text" placeholder="Country" className="w-full border p-2 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Platform;
