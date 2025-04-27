import React from "react";

function Section() {
  return (
    <section className="relative bg-white">
      <div className="bg-blue-600 h-16 sm:h-20 md:h-24 w-full rounded-b-[50%]"></div>

      <div className="max-w-6xl mx-auto text-center py-12 sm:py-16 px-4 sm:px-6 md:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900">
          Our Core Strengths
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mt-10">
          <div className="text-center px-2 sm:px-4">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500">850+</span>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mt-2">
              Global University Tie Ups
            </h3>
            <p className="text-sm sm:text-base text-gray-600 font-medium mt-2">
              Our students aren’t just pursuing their higher education, but their dreams and ambitions in eminent universities across the globe.
            </p>
          </div>

          <div className="text-center px-2 sm:px-4">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500">65+</span>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mt-2">
              Offices across the Globe
            </h3>
            <p className="text-sm sm:text-base text-gray-600 font-medium mt-2">
              We’re growing, we’re expanding and we’re doing that fast! Join the fastest growing EdTech brand in South and South-East Asia.
            </p>
          </div>

          <div className="text-center px-2 sm:px-4">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500">26</span>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mt-2">
              Years of Industry Presence
            </h3>
            <p className="text-sm sm:text-base text-gray-600 font-medium mt-2">
              With over two decades of industry expertise, we know what’s best for you and that makes us really good at what we do!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
