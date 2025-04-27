import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Section from './Component/Section';
import College from './Component/College';
import Main from './Component/Main';
import University from './Component/University';
import Country from './Component/Country';
import Webinar from "./Component/Webinar";
import Platform from './Component/Platform';
import Loans from './Component/Loans';
import Eminent from './Component/Eminent';
import Updates from './Component/Updates';
import Blogs from './Component/Blogs';
import Count from "./Component/Count";
import Footer from "./Component/Footer";
import Homepage from './Page2/Homepage';
import Services from './Page2/Services';

function App() {
  const [showHomepage, setShowHomepage] = useState(false);
  const [showServices, setShowServices] = useState(false); // ✅ NEW STATE

  const handleStudyClick = () => {
    setShowHomepage(true);
    setShowServices(false); // ✅ hide services
  };

  const handleServicesClick = () => {
    setShowServices(true);
    setShowHomepage(false); // ✅ hide homepage
  };

  return (
    <div>
      {/* ✅ pass both functions to Navbar */}
      <Navbar onStudyClick={handleStudyClick} onServicesClick={handleServicesClick} />

      {showHomepage ? (
        <Homepage />
      ) : showServices ? (
        <Services />
      ) : (
        <>
          <Hero />
          <Section />
          <College />
          <Main />
          <University />
          <Country />
          <Webinar />
          <Platform />
          <Loans />
          <Eminent />
          <Updates />
          <Blogs />
          <Count />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
