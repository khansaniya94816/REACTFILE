import React from "react";
import Image1 from "../Assets/MBA.jpg";
import Image2 from "../Assets/Received.jpg";
import Image3 from "../Assets/GMAT.png";
import arrow from "../Assets/right-arrow.svg"

function Blogs() {
  return (
    <div className="bg-[#FFF7F0] py-6 flex justify-center">
      <div className="max-w-6xl w-full px-4">
        <h1 className="text-center text-3xl font-bold pb-6">Blogs</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center">
            <img src={Image1} alt="MBA in Australia" className="w-[80%] h-auto" />
            <div className="p-5 w-full">
              <h2 className="text-sm font-bold text-blue-600">STUDY ABROAD</h2>
              <p className="text-xl font-semibold mt-1">
                Why Studying MBA in Australia is A{" "}
               Great Idea?
              </p>
              <p className="text-gray-500 text-sm mt-2">Mar 24, 2025</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            
            <div className="bg-white w-full rounded-xl shadow-lg overflow-hidden flex">
              <img src={Image2} alt="Testimonial"className="w-56 h-56 rounded-lg" />
              <div className="p-4 w-1/2">
                <h2 className="text-xs font-bold text-blue-600">STUDENT TESTIMONIAL</h2>
                <p className="text-sm font-semibold mt-1">
                  From Nagpur to Queensland: How KC Made My Study Abroad...
                </p>
                <p className="text-gray-500 text-xs mt-2">Dec 06, 2024</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex">
              <img src={Image3} alt="GMAT Coaching" className="w-56 h-56 rounded-lg" />
              <div className="p-4 w-1/2">
                <h2 className="text-xs font-bold text-blue-600">COACHING</h2>
                <p className="text-sm font-semibold mt-1">
                  GMAT Online Coaching: Benefits, Test Prep, Best Provider & More
                </p>
                <p className="text-gray-500 text-xs mt-2">Feb 05, 2025</p>
              </div>
              
              
            </div>
           

          </div>
         

        </div>
        <div className="mt-6 flex justify-center">
  <div className="inline-flex items-center gap-1 text-[#FD6D63] font-medium cursor-pointer">
    <span>All Blogs</span>
    <img src={arrow} alt="Arrow" className="w-4 h-4" />
  </div>
</div>

       
      </div>
     
      
    </div>
  );
}

export default Blogs;
