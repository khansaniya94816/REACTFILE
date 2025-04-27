import React from "react";
import Image from "../Assets/for-student.svg";

function Services() {
  return (
    <div className="flex justify-between text-gray-600 ml-8 mr-8 mt-10 gap-x-12">
      <div className="flex flex-col space-y-2 items-start">
        <img src={Image} alt="For Student" className="w-auto h-auto" />
        <h1 className="mt-6 text-lg font-semibold text-gray-800">For Student</h1>
        <p className="text-sm">Counselling</p>
        <p className="text-sm">Test Preparation</p>
        <p className="text-sm">Country & University Selection</p>
      </div>

      <div className="flex flex-col space-y-2 items-start">
        <p className="text-sm">Application & Admission</p>
        <p className="text-sm">Scholarship</p>
        <p className="text-sm">Internship</p>
      </div>

      <div className="flex flex-col space-y-2 items-start">
        <p className="text-sm">Education Loan</p>
        <p className="text-sm">Visa Processing</p>
        <p className="text-sm">Allied Services</p>
      </div>
    </div>
  );
}

export default Services;
