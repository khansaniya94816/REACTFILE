import React from "react";
import Image from "../Assets/Home_4.svg"; 
import image from "../Assets/images.png"; 
import arrow from "../Assets/right-arrow.svg"

function University() {
    return (
        <div className="flex items-center justify-between bg-[#E8DAF8] p-12 rounded-lg relative overflow-hidden">
            
            <div className="relative w-1/2 flex justify-start">
                <div className="absolute -z-10 left-10 top-1/2 transform -translate-y-1/2 bg-[#C7A3E2] rounded-full w-72 h-72"></div>

                <img src={Image} alt="Universities" className="w-90 h-auto object-cover ml-20 relative z-10" />
            </div>
            <div className="w-1/2 pl-4">
                <h2 className="text-2xl font-bold text-gray-900">For Universities</h2>
                <p className="text-gray-600 mt-2">
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
                            <p className="text-gray-900">{text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-1 text-[#FD6D63] font-medium cursor-pointer">
  <span>See More</span>
  <img src={arrow} alt="Arrow" className="w-4 h-4" />
</div>

            </div>

        </div>
    );
}

export default University;
