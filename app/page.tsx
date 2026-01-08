import React from 'react';
import Navbar from './Components/Navbars/Navbar';
import Hero from './Components/Hero/Hero';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Features from './Components/Feature/Features';
import CTASection from './Components/CTA/CTASection';
import Footer from './Components/Footer/Footer';

const Home = () => {
  return (
    <div  style={{ backgroundColor: "var(--background-color)" }}>
      <Navbar/>
      <Hero/>
      <HowItWorks/>
      <Features/>
      <CTASection/>
      <Footer/>
    </div>
  );
};

export default Home;