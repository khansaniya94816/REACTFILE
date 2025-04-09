import React from "react";
import Image from "../Assets/Section_2.jpg"; 
import image from "../Assets/Card_Image.jpg"; 
import Img from "../Assets/Card_Image_1.jpg"; 
import arrow from "../Assets/right-arrow.svg"

function Webinar() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white py-8 px-4 rounded-lg">
         <h1 className="text-center text-5xl font-semibold text-gray-900 mb-8">
        Webinars & Events
      </h1>
      <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="relative bg-white p-4 rounded-lg shadow-lg">
          <img src={Image} alt="" className="w-full rounded-lg" />
          <div className="absolute top-4 left-4 bg-yellow-400 text-sm font-semibold px-2 py-1 rounded">
            Élan
          </div>
          <div className="p-4">
            <h3 className="text-blue-600 font-semibold text-sm">
              Sat, 29th March 2025 • 2:00 pm - 6:00 pm IST
            </h3>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              Attend Virtual Study Abroad Loan Fair
            </h2>
            <p className="text-gray-600 mt-2">
              Interact Online with 20+ Leading Banks & Financial Institutions.
            </p>
            <div className="mt-6 inline-flex items-center gap-1 text-[#FD6D63] font-medium cursor-pointer">
  <span>Register Now</span>
  <img src={arrow} alt="Arrow" className="w-4 h-4" />
</div>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg flex w-full h-50">
            <img src={image} alt="IELTS Prep" className="w-56 h-56 rounded-lg" />
            <div className="ml-4 flex flex-col justify-center">
              <h3 className="text-blue-600 font-semibold text-sm">
                Friday, 21st March 2025 • 8:00 pm - 9:30 pm
              </h3>
              <h2 className="text-xl font-bold text-gray-900">
                Test Preparation for IELTS
              </h2>
              <p className="text-gray-600 text-base">
                Crack your IELTS in one go with 8+ Bands. A Gateway to
                High-Ranked...
              </p>
              <div className="mt-6 inline-flex items-center gap-1 text-[#FD6D63] font-medium cursor-pointer">
  <span>Register Now</span>
  <img src={arrow} alt="Arrow" className="w-4 h-4" />
</div>

            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex w-full h-50">
            <img src={Img} alt="GRE Prep" className="w-56 h-56 rounded-lg" />
            <div className="ml-4 flex flex-col justify-center">
              <h3 className="text-blue-600 font-semibold text-sm">
                Tuesday, 25th March 2025 • 7:00 am - 8:30 am
              </h3>
              <h2 className="text-xl font-bold text-gray-900">
                Test Preparation for GRE
              </h2>
              <p className="text-gray-600 text-base">
                Get ready to study at a Top-ranked University with 320+ Score in GRE.
              </p>
              <div className="mt-6 inline-flex items-center gap-1 text-[#FD6D63] font-medium cursor-pointer">
  <span>Register Now</span>
  <img src={arrow} alt="Arrow" className="w-4 h-4" />
</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex item-inline flex justify-center gap-1 text-[#FD6D63] font-medium cursor-pointer">
  <span>Register Now</span>
  <img src={arrow} alt="Arrow" className="w-4 h-4" />
</div>
    </div>
  );
}

export default Webinar;