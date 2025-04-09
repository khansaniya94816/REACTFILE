import React from "react";
import Image from "../Assets/calculator.svg"
import TickIcon from "../Assets/image.png"
import arrow from "../Assets/right-arrow.svg"
function Loans() {
    return(
        <div className="flex justify-between">
            <div>
            <img src={Image} alt="" className="ml-20"/>
            </div>
            <div>
                <h1 className="mr-44 font-semibold text-4xl">Fly High with Elan Loans
                </h1>
                <p className="mt-8 text-1xl text-gray-500 font-semibold">Availing an education loan to study in your dream university has never <br /> been easier!</p> 
                <ul>
            <li className="flex items-center text-gray-800 mt-10 font-medium"><img src={TickIcon} alt="Tick" className="w-10 h-10 mr-2" />Study Loans through 20 leading banks</li>
            <li className="flex items-center  text-gray-800 mt-6 font-semibold"><img src={TickIcon} alt="Tick" className="w-10 h-10 mr-2" />Financial structuring to suit your university     </li>
            <li className="flex items-center  text-gray-800 mt-6 font-semibold"><img src={TickIcon} alt="Tick" className="w-10 h-10 mr-2" />Hassle free documentationPre-visa disbursal of loans</li>
            <li className="flex items-center  text-gray-800 mt-6 font-semibold"><img src={TickIcon} alt="Tick" className="w-10 h-10 mr-2" /> Pre-visa disbursal of loans</li>
            <li className="flex items-center  text-gray-800 mt-6 font-semibold"><img src={TickIcon} alt="Tick" className="w-10 h-10 mr-2" /> Forex & Travel Insurance</li>

            </ul>
<div className="mt-6 inline-flex items-center gap-1 text-[#FD6D63] font-medium cursor-pointer">
            <span>Elan Loans</span>
            <img src={arrow} alt="Arrow" className="w-4 h-4" />
          </div>
            </div>
        </div>
    )
}
export default Loans;