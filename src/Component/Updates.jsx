import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import img1 from "../Assets/US_Mission.jpg";
import img2 from "../Assets/Commonwealth.jpg";
import img3 from "../Assets/International.png";
import img4 from "../Assets/Danish_State.jpg";
import img5 from "../Assets/UK_Revises.png";
import img6 from "../Assets/Canada_.jpg";
import img7 from "../Assets/New_Zealand.jpg";
import img8 from "../Assets/UK_Pauses.jpg";
import img9 from "../Assets/NZ_aims.jpg";
import arrow from "../Assets/right-arrow.svg";

function Updates() {
  const slides = [
    { src: img1, title: "Great Relief for International Students", text: "The much-anticipated update regarding the UK’s Graduate Route Visa (Post Study Work Visa) is finally..." },
    { src: img2, title: "UK’s Graduate Route Update", text: "The Migration Advisory Committee (MAC) has released key recommendations regarding visa policies..." },
    { src: img3, title: "International Student Benefits", text: "Recent improvements in international student policies are making studying abroad easier..." },
    { src: img4, title: "Danish Scholarship Program", text: "Denmark has announced new state scholarships for international students applying for 2025." },
    { src: img5, title: "UK Revises Visa Guidelines", text: "UK makes major changes to student visa policies to attract global talent." },
    { src: img6, title: "Canada Expands PR Programs", text: "Canada offers new pathways for international graduates to obtain Permanent Residency." },
    { src: img7, title: "New Zealand’s Study & Work", text: "NZ enhances study benefits, allowing students better job opportunities post-graduation." },
    { src: img8, title: "UK Temporarily Pauses Visas", text: "UK Government has put a temporary pause on certain visa categories amid policy changes." },
    { src: img9, title: "New Zealand’s Immigration Plans", text: "New Zealand updates policies to attract more skilled professionals." },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-10">
      <h1 className="text-center my-10 text-3xl sm:text-4xl md:text-5xl font-semibold">Latest KC Updates</h1>

      <div className="flex flex-col lg:flex-row items-start gap-10">
        <div className="bg-orange-400 text-black p-6 sm:p-8 rounded-2xl w-full sm:w-[400px] h-auto sm:h-[400px] shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold">We're Hiring!</h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed">
            Attend KC's Mega International Recruitment Drive on <strong>Saturday, 29th March 2025</strong> and Join the Fastest Growing Edtech Company Globally.
          </p>
          <div className="mt-6 flex justify-center">
            <button className="bg-white text-red-500 font-semibold py-2 px-5 sm:py-3 sm:px-6 rounded-lg shadow-md hover:bg-red-100 transition">
              Apply Now
            </button>
          </div>
        </div>

        <div className="w-full sm:w-[700px]">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 2500 }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            className="rounded-xl shadow-lg"
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index} className="bg-white p-5 rounded-lg shadow-md border border-gray-300 h-[450px]">
                <div className="flex flex-col items-center h-full justify-between">
                  <img src={item.src} alt={item.title} className="w-[90%] h-44 object-cover rounded-md" />
                  <h3 className="text-lg font-semibold mt-3 text-center">{item.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm text-center px-4">{item.text}</p>
                  <div className="mt-4">
                    <button className="text-red-500 font-semibold text-sm hover:underline">Read More</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex justify-center gap-1 text-[#FD6D63] font-medium cursor-pointer mt-6">
        <span>More News</span>
        <img src={arrow} alt="Arrow" className="w-4 h-4" />
      </div>
    </div>
  );
}

export default Updates;
