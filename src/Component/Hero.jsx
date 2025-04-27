import React from "react";
import backgroundPattern from "../Assets/background-image.png"; 
import heroImage from "../Assets/your-custom-pattern.svg"; 
import img from "../Assets/img_.png"

function Hero() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-20 bg-blue-600 overflow-hidden">
      
      <div className="relative z-10 max-w-xl text-center md:text-left md:ml-0 lg:ml-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 md:mt-20 text-white font-semibold leading-tight">
          We are bringing overseas education within everyone’s reach
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium">
          Our Tech-enabled solutions help international students and recruitment partners 
          choose the best global universities.
        </p>
        <button className="mt-6 px-6 py-3 text-sm sm:text-base text-white font-semibold rounded-md shadow-md 
          bg-gradient-to-r from-orange-400 to-red-400 hover:opacity-90 transition duration-300">
          Start Your Journey
        </button>
      </div>

      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mt-10 md:mt-0 md:mr-0 lg:mr-16 z-10">
        <div
          className="absolute top-[-20px] sm:top-[-40px] md:top-[-60px] right-[-30px] sm:right-[-60px] md:right-[-100px] w-[250px] sm:w-[500px] md:w-[700px] lg:w-[900px] h-full bg-no-repeat bg-cover opacity-30"
          style={{ backgroundImage: `url(${backgroundPattern})` }}
        ></div>
        <img src={heroImage} alt="Student" className="relative z-20 w-full" />
      </div>

            <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 w-10 h-10 sm:w-12 sm:h-12 md:w-[64px] md:h-[64px] bg-[#007aff] 
          rounded-tl-[20px] sm:rounded-tl-[28px] md:rounded-tl-[32px] 
          rounded-tr-[20px] sm:rounded-tr-[28px] md:rounded-tr-[32px] 
          rounded-bl-[20px] sm:rounded-bl-[28px] md:rounded-bl-[32px] 
          rounded-br-[10px] sm:rounded-br-[14px] md:rounded-br-[16px] 
          shadow-lg flex items-center justify-center z-50 cursor-pointer">
        <img src={img} alt="Chat Icon" className="w-5 h-5 sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px]" />
      </div>
    </div>
  );
}

export default Hero;
