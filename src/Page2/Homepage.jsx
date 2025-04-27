import React from "react";
import Flag from "../Assets/usaflag.svg";
import Flag2 from "../Assets/canadaflag.svg";
import Flag3 from "../Assets/unitedkingdom.svg";
import Flag4 from "../Assets/ireland-flag.svg";
import Flag5 from "../Assets/australia.svg";
import Flag6 from "../Assets/newzealandflag.svg";
import Flag7 from "../Assets/europflag.svg";
import Flag8 from "../Assets/asia.svg";

const countries = [
  { flag: Flag, name: "USA" },
  { flag: Flag2, name: "Canada" },
  { flag: Flag3, name: "United Kingdom" },
  { flag: Flag4, name: "Ireland" },
  { flag: Flag5, name: "Australia" },
  { flag: Flag6, name: "New Zealand" },
  { flag: Flag7, name: "Europe" },
  { flag: Flag8, name: "Asia" },
];

function Homepage() {
  return (
    <div className="bg-white py-10 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-y-10 gap-x-6 place-items-center">
        {countries.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={item.flag}
              alt={item.name}
              className="w-16 h-16 object-contain mb-2 rounded-lg border-2 border-gray-300"
            />
            <h1 className="text-sm font-medium text-gray-800">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
