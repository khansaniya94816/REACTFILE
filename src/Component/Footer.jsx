import React from "react";
import image from "../Assets/Group_22.svg";
import ABCD from "../Assets/ABCD.svg";
import recog from "../Assets/recog.svg";
import AAERI from "../Assets/AAERI.svg";
import pier from "../Assets/pier.svg";
import ICEF from "../Assets/ICEF.png";
import facebook from "../Assets/facebook.svg";
import instagram from "../Assets/instagram.svg";
import linkedin from "../Assets/linkedin.svg";
import youtube from "../Assets/youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-[#071F38] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">Stay updated with KC Overseas</h2>
          <div className="mt-4 flex flex-col md:flex-row justify-center gap-4">
            <input type="email" placeholder="Email ID" className="p-3 w-full sm:w-80 text-black rounded" />
            <select className="p-3 w-full sm:w-80 text-gray-600 rounded">
              <option>I'm Interested in</option>
            </select>
            <button className="bg-gradient-to-r from-yellow-300 to-orange-700 px-6 py-3 rounded text-white font-semibold w-full sm:w-52">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm border-t border-gray-600 pt-10">
          <div>
            <img src={image} alt="" className="w-40 mx-auto md:mx-0"/>
            <h3 className="text-lg mt-16 font-semibold font-mono text-white">About KC Overseas</h3>
            <p className="mt-3 text-lg text-white">
              We are the fastest growing<br/> EdTech brand operating<br/> across geographies,<br/> facilitating international<br/> student recruitments by<br/> connecting students,<br/> recruitment entrepreneurs<br/> and global universities<br/> through our high-tech online<br/> platform – coursefinder.ai
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg text-base text-gray-500">Study Destinations</h3>
            <ul className="mt-2 text-lg text-white space-y-1">
              <li>United States</li>
              <li>Canada</li>
              <li>United Kingdom</li>
              <li>Ireland</li>
              <li>Australia</li>
              <li>New Zealand</li>
              <li>Europe</li>
              <li>Asia</li>
              <li className="text-gray-600 font-bold">LOGIN TO</li>
              <li>Find my Course</li>
              <li>Elan Loans</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg text-gray-500">Services for Students</h3>
            <ul className="mt-2 text-lg text-white space-y-1">
              <li>Counselling</li>
              <li>Test Preparation</li>
              <li>Applications & Admission</li>
              <li>Scholarships</li>
              <li>Internships</li>
              <li>Visa Processing</li>
              <li>Allied Services</li>
              <li className="text-gray-500 font-medium text-lg">Services for Institutions</li>
              <li className="text-gray-500 font-semibold text-lg">Services for Partners</li>
              <li className="text-gray-500 font-semibold text-lg">Services for Franchisee</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg text-gray-500">Company</h3>
            <ul className="mt-3 text-2xl text-white space-y-1">
              <li className="mt-3 text-lg">About Us</li>
              <li className="mt-4 text-lg">Careers <span className="bg-blue-600 text-white px-2 py-1 ml-2 text-xs rounded">WE'RE HIRING!</span></li>
              <li className="mt-4 text-lg">News & Events</li>
              <li className="mt-4 text-lg">CSR Policy</li>
              <li className="mt-4 text-lg">Blog</li>
              <li className="mt-4 text-lg">Contact Us</li>
              <li className="text-white text-lg">How to Choose an Education<br/> Agent ?</li>
              <li className="text-gray-500 font-medium text-lg">Search Universities</li>
              <li className="text-gray-500 font-medium text-lg">Upcoming Events <span className="bg-blue-600 text-white px-2 py-1 ml-4 text-xs rounded">NEW!</span></li>
              <li className="text-gray-500 font-medium text-lg">Become KC Certified<br/> Counselor</li>
              <li className="text-gray-500 font-medium text-lg">Book Online Counselling</li>
              <li className="text-gray-500 font-medium text-lg">USA Online Counselling</li>
            </ul>
          </div>
        </div>

        <div className="text-center border-t border-gray-600 mt-14">
          <h3 className="font-bold text-2xl text-white">Global Accreditations & Recognitions</h3>
          <div className="flex justify-center items-center gap-16 mt-6 flex-wrap">
            <img src={ABCD} alt="AAERI" className="h-12" />
            <img src={recog} alt="Recognition" className="h-10" />
            <img src={AAERI} alt="" />
            <img src={pier} alt="PIER" className="h-12 w-40" />
            <img src={ICEF} alt="Education UK" className="h-14" />
          </div>
        </div>

        <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="flex gap-4">
            <img src={facebook} alt="Facebook" className="h-8" />
            <img src={instagram} alt="Instagram" className="h-8" />
            <img src={linkedin} alt="LinkedIn" className="h-8" />
            <img src={youtube} alt="YouTube" className="h-8" />
          </div>
          <p className="text-sm text-lg">Copyright © KC Overseas Education 2004-2025</p>
          <div className="flex gap-4 font-sm text-lg">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Payment Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
