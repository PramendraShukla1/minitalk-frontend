import React from 'react'
import heroVideo from "../assets/heroVideo.mp4";
import france from "../assets/france.png";
import german from "../assets/german.png";
import india from "../assets/india.png";
import italy from "../assets/italy.png";
import portugal from "../assets/portugal.png";
import spain from "../assets/spain.png";

const BannerComp = () => {
    
  return (
    <div className="w-full flex justify-center lg:flex-row flex-col lg:mb-28 mb-0 mt-10">
      {/* Div Left */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <video
          src={heroVideo}
          loop
          autoPlay
          muted
          type="video/mp4"
          className="lg:w-1/2 w-full"
        ></video>
      </div>

      {/* Div Right */}
      <div className="lg:w-1/2 w-full">
        <h1 className="lg:text-8xl text-6xl font-semibold font-sans lg:mt-0 mt-10 lg:p-0 p-5">
          The <span className="text-red-500 animate-pulse" >free</span>, <span className="text-purple-400 animate-pulse">fun</span>, and <span className="text-blue-400 animate-pulse">effective</span>  way to learn a language!
        </h1>
        {/* Image div */}
        <div className="flex flex-wrap w-full gap-10 lg:justify-between justify-center p-5 lg:mt-10 mt-5">
          <img src={india} alt="" className="lg:w-1/4 w-1/3 shadow-xl" />
          <img src={france} alt="" className="lg:w-1/4 w-1/3 shadow-xl" />
          <img src={german} alt="" className="lg:w-1/4 w-1/3 shadow-xl" />
          <img src={italy} alt="" className="lg:w-1/4 w-1/3 shadow-xl" />
          <img src={portugal} alt="" className="lg:w-1/4 w-1/3 shadow-xl" />
          <img src={spain} alt="" className="lg:w-1/4 w-1/3 shadow-xl" />
        </div>
      </div>
    </div>
  )
}

export default BannerComp