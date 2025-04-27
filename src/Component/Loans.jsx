import React from "react";
import Image from "../Assets/calculator.svg";
import TickIcon from "../Assets/image.png";
import arrow from "../Assets/right-arrow.svg";

function Loans() {
    return (
        <div className="flex flex-col md:flex-row justify-between px-4 py-8 md:px-20 md:py-16">
            <div className="mb-8 md:mb-0">
                <img src={Image} alt="Calculator" className="w-full md:w-[500px] mx-auto" />
            </div>
            
            <div className="flex flex-col justify-center md:w-1/2">
                <h1 className="font-semibold text-3xl md:text-4xl text-center md:text-left mb-6">
                    Fly High with Elan Loans
                </h1>
                <p className="text-xl text-gray-500 font-semibold text-center md:text-left mb-8">
                    Availing an education loan to study in your dream university has never <br /> been easier!
                </p>
                <ul className="space-y-6">
                    <li className="flex items-center text-gray-800 font-medium">
                        <img src={TickIcon} alt="Tick" className="w-10 h-10 mr-2" />
                        Study Loans through 20 leading banks
                    </li>
                    <li className="flex items-center text-gray-800 font-semibold">
                        <img src={TickIcon} alt="Tick" className="w-10 h-10 mr-2" />
                        Financial structuring to suit your university
                    </li>
                    <li className="flex items-center text-gray-800 font-semibold">
                        <img src={TickIcon} alt="Tick" className="w-10 h-10 mr-2" />
                        Hassle free documentation & Pre-visa disbursal of loans
                    </li>
                    <li className="flex items-center text-gray-800 font-semibold">
                        <img src={TickIcon} alt="Tick" className="w-10 h-10 mr-2" />
                        Pre-visa disbursal of loans
                    </li>
                    <li className="flex items-center text-gray-800 font-semibold">
                        <img src={TickIcon} alt="Tick" className="w-10 h-10 mr-2" />
                        Forex & Travel Insurance
                    </li>
                </ul>
                <div className="mt-6 inline-flex items-center gap-1 text-[#FD6D63] font-medium cursor-pointer justify-center md:justify-start">
                    <span>Elan Loans</span>
                    <img src={arrow} alt="Arrow" className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
}

export default Loans;
