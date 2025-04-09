import React from "react";
import Image from "../Assets/Home_Page.svg"
import images from "../Assets/images.png"
import Img from "../Assets/Home_Page_Partners.svg"
import arrow from "../Assets/right-arrow.svg"

function College() {
    return(
        <section className="bg-pink-100 py-16 px-6 md:px-16 relative">
        
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-semibold text-gray-900">
                KC Services & Offerings
            </h2>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center mt-6">
          
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-900 mt-6">For Students</h3>
            <p className="text-gray-700 mt-3">
              With a keen ear for your choices and preferences, our counselling experience is so seamless that you will land in your dream university!
            </p>
            <div>
            <h3 className="text-xl font-semibold text-gray-900 mt-6">Offering</h3>

            </div>


            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg overflow-hidden">
  <img src={images} alt="Star Icon" className="w-4 h-6 object-contain" />
</div>

                <p className="text-gray-900 font-medium">Virtual Coaching and Counselling</p>
              </div>
              <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg overflow-hidden">
  <img src={images} alt="Star Icon" className="w-4 h-6 object-contain" />
</div>

                <p className="text-gray-900 font-medium">Applications, Admissions & Visas</p>
              </div>
              <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg overflow-hidden">
  <img src={images} alt="Star Icon" className="w-4 h-6 object-contain" />
</div>

                <p className="text-gray-900 font-medium">High Value Scholarships and Study Loans</p>
              </div>
            </div>
  
          </div>
  
          <div className="md:w-1/2  flex justify-end mt-10 md:mt-0 relative">
            <div className="relative">
            
              <img 
                src={Image}  
                alt="Student" 
                className="w-72 h-auto rounded-lg shadow-lg bg-pink-100"
              />
              <div className="absolute -z-10 top-1/4 left-1/4 w-48 h-48 bg-pink-300 rounded-full"></div>
            </div>
          </div>
  
        </div>
        <div className="flex items-center bg-pink-100 md:space-x-10">
  <div className="flex-shrink-0">
    <img src={Img} alt="" className="w-90 h-90 object-cover" />
  </div>

  <div className="md:w-1/2">
    <h2 className="text-xl font-bold text-gray-900">For Partners</h2>
    <p className="text-gray-700 mt-2">
      Work with our team and state-of-the-art technology and experience how they can be a game changer for your business.
    </p>

    <div className="mt-6 space-y-4">
      {[
        "Innovative technology customized for your business",
        "Webinars by University Delegates and KC Experts",
        "Unparalleled end-to-end support",
      ].map((text, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg overflow-hidden">
  <img src={images} alt="Star Icon" className="w-4 h-6 object-contain" />
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

      
      </section>
    )
}

export default College;
