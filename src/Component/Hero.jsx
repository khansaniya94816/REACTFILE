import React from "react";
import backgroundPattern from "../Assets/background-image.png"; 
import heroImage from "../Assets/your-custom-pattern.svg"; 
import img from "../Assets/img_.png"
function Hero() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-blue-600">
      
      <div className="relative z-10 max-w-lg ml-16">
        <h1 className="text-5xl mt-20 text-white font-semibold leading-tight">
          We are bringing overseas education within everyone’s reach
        </h1>
        <p className="mt-4 font-medium text-2xl  text-lg text-white">
          Our Tech-enabled solutions help international students and recruitment partners 
          choose the best global universities.
        </p>
        <button className="px-6 py-3 text-white font-semibold rounded-md shadow-md 
          bg-gradient-to-r from-orange-400 to-red-400 hover:opacity-90 transition duration-300 
          mt-6">
          Start Your Journey
        </button>
      </div>

      <div className="relative mr-16 z-10 mt-14 md:mt-0 w-full max-w-xl">
        <div
          className="absolute top-[-50px] right-[-100px]  w-[900px] h-full bg-no-repeat bg-cover opacity-30"
          style={{ backgroundImage: `url(${backgroundPattern})` }}
        ></div>
        
        <img src={heroImage} alt="Student" className="relative z-20 w-full" />
        
      </div>
      <div className="fixed bottom-6 right-6 w-[64px] h-[64px] bg-[#007aff] rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[32px] rounded-br-[16px] shadow-lg flex items-center justify-center z-50 cursor-pointer">
  <img src={img} alt="Chat Icon" className="w-[28px] h-[28px]" />
</div>


    </div>
  );
}

export default Hero;
