import Navbar from '@/components/Navbar';
import DynamicBackground from '@/components/DynamicBackground';

export default function Home() {

  return (
    <div className='h-[50rem] w-full relative'>
      <DynamicBackground />
      {/* Backgroung gradient Black shade , so that text can be seen */}
      <div className="gradiantBlack w-full h-full bg-gradient-to-r from-black via-transparent to-transparent">

        {/* Navbar */}
        <div className="nav w-full px-[4.4rem] py-4 text-white bg-gradient-to-b from-black ">
          <Navbar />
          <div className="navEmpty h-20 "></div>
        </div>

        {/* Crowdfunding heading Section */}
        <div className='crowdfunding h-[75%] text-white w-[57%] flex flex-col gap-7 justify-center px-[4.4rem]'>
          <div className=''>
            <h1 className=" text-6xl font-bold leading-tight ">
              Crowdfunding Platform for Creators
            </h1>
            <p className='text-2xl mt-4 font-faculty'>Showcase your ideas, gain community support, and secure funding to bring your vision to life</p>

          </div>
          <div className='button'>
            <a className="relative inline-flex items-center justify-start px-8 py-4 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#3198de] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">GET STARTED</span>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
}
