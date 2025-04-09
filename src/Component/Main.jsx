import React from "react";
import Image from "../Assets/Home_Frenchisee.svg";
import image from "../Assets/images.png";
import arrow from "../Assets/right-arrow.svg"

function Main() {
    return (
        <div className="flex items-center justify-between bg-[#DDEBFF] p-12 rounded-lg relative overflow-hidden">
            
            <div className="w-1/2 pl-10">
                <h2 className="text-2xl font-bold text-gray-900">For Franchisees</h2>
                <p className="text-gray-600 mt-2">
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
                            <p className="text-gray-900">{text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-1 text-[#FD6D63] font-medium cursor-pointer">
  <span>See More</span>
  <img src={arrow} alt="Arrow" className="w-4 h-4" />
</div>

            </div>
            <div className="relative w-1/2 flex justify-end">
                <div className="absolute -z-10 right-10 top-1/2 transform -translate-y-1/2 bg-[#B7D4FF] rounded-full w-72 h-72"></div>

                <img src={Image} alt="Franchisee" className="w-80 h-auto object-cover relative z-10" />
            </div>
        </div>
    );
}

export default Main;
