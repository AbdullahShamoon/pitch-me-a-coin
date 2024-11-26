'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [currentBackground, setCurrentBackground] = useState(0);

  // Define a list of Tailwind classes for backgrounds
  const backgrounds = [
    "bg-[url('/1.jpg')]",
    "bg-[url('/2.jpg')]",
    "bg-[url('/3.jpg')]",
    "bg-[url('/4.jpg')]",
    "bg-[url('/5.jpg')]",

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [backgrounds.length]);

  return (
    <div className={`h-[50rem] w-full ${backgrounds[currentBackground]} bg-cover transition-all duration-[1500ms] ease-in-out`}>

      {/* Backgroung gradient Black shade , so that text can be seen */}
      <div className="gradiantBlack w-full h-full bg-gradient-to-r from-black via-transparent to-transparent">

        {/* Navbar */}
        <div className="nav w-full px-[4.4rem] py-4 text-white bg-gradient-to-b from-black ">
          <Navbar />
          <div className="navEmpty h-20 "></div>
        </div>

        {/* Crowdfunding heading Section */}
        <div className='crowdfunding h-[75%] text-white w-[55%] flex flex-col gap-7 justify-center px-[4.4rem]'>
          <div className=''>
            <h1 className=" text-6xl font-bold leading-tight ">
              Crowdfunding Platform for Creators
            </h1>
            <p className='text-2xl mt-4 font-faculty'>Showcase your ideas, gain community support, and secure funding to bring your vision to life</p>

          </div>
          <div className='button'>
            <a href="#_" className="relative inline-flex items-center justify-start px-8 py-4 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#3198de] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">GET STARTED</span>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
}
