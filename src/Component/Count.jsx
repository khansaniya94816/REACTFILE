import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import airc from "../Assets/AIRC.png";
import pieNews from "../Assets/The_Pie.svg";
import hindustanTimes from "../Assets/Hindustan.svg";
import moneycontrol from "../Assets/Money.svg";
import vccircle from "../Assets/VCCIRCLE.svg";
import businessStandard from "../Assets/Business.svg";
import yourStory from "../Assets/Your_Story.svg";
import prlog from "../Assets/PRLOG.svg";

const slides = [
  [
    { name: "AIRC", logo: airc },
    { name: "The PIE News", logo: pieNews },
    { name: "Hindustan Times", logo: hindustanTimes },
    { name: "Moneycontrol", logo: moneycontrol },
    { name: "VCCircle", logo: vccircle },
    { name: "Business Standard", logo: businessStandard },
    { name: "YourStory", logo: yourStory },
  ],
  [
    { name: "YourStory", logo: yourStory },
    { name: "PRLOG", logo: prlog },
    { name: "The PIE News", logo: pieNews },
  ]
];

const Count = () => {
  return (
    <div className="text-center py-16">
      <h2 className="text-4xl font-bold mb-10">KC in the News</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="max-w-6xl mx-auto"
      >
        {slides.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
              {group.map((source, idx) => (
                <div key={idx} className="flex justify-center items-center border p-6 shadow-md rounded-lg bg-white">
                  <img src={source.logo} alt={source.name} className="max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-28" />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          .swiper-pagination {
            margin-top: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            margin: 0 6px;
            background-color: #E5E7EB; /* gray-200 */
            border-radius: 9999px;
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background-color: #0A0C2C; /* dark navy blue */
          }
        `}
      </style>
    </div>
  );
};

export default Count;
