import React from "react";
import image from "../Assets/multi_country_.svg"
import arrow from "../Assets/right-arrow.svg"
function Country() {
    return(
        <div className="flex justify-between">
            <img src={image} alt="" className="ml-24"/>
            <div className="w-1/2 pl-10">
                <h2 className="text-5xl font-bold mt-40 text-gray-900">KC’s Multi Country Advantage</h2>
                <h3 className="text-2xl  text-black mt-8">The World is your Campus!</h3>
                <p className="text-black font-medium text-1xl  mt-10">
                    Aspire for more. Choose what suits you the best from 800+ global universities in 33 countries, world over.
                    The choices and opportunities our universities offer are endless!
                </p>
                <div className="mt-6 inline-flex items-center gap-1 text-[#FD6D63] font-medium cursor-pointer">
  <span>Expolre Countries</span>
  <img src={arrow} alt="Arrow" className="w-4 h-4" />
</div>

            </div>
        </div>
    )
}
export default Country;