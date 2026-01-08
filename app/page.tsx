import React from 'react';
import Navbar from './Components/Navbars/Navbar';
import Hero from './Components/Hero/Hero';
import HowItWorks from './Components/HowItWorks/HowItWorks';

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <HowItWorks/>
    </div>
  );
};

export default Home;