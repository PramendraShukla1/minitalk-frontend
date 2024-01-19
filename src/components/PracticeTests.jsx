import React from "react";
import france from "../assets/france.png";
import german from "../assets/german.png";
import india from "../assets/india.png";
import italy from "../assets/italy.png";
import portugal from "../assets/portugal.png";
import spain from "../assets/spain.png";
import england from "../assets/england.png";
import { useNavigate } from "react-router-dom";

const PracticeTests = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:mt-20 mt-0 p-10 w-full">
      <h1 className="lg:text-8xl text-6xl font-semibold font-sans lg:mt-0 mt-10 lg:p-0 p-5 text-center mb-20">
        Practice Tests Of Your{" "}
        <span className="text-red-500 animate-pulse">Preferred Languages</span>
      </h1>

      <div className="w-full flex justify-center mt-36 lg:flex-row flex-col mb-36">
        {/* Div Left */}
        <div className="lg:w-1/2 w-full flex justify-center flex-col items-center">
          <div className="flex flex-col gap-5 lg:w-2/3 w-full place-content-center">
            <h1 className="lg:text-8xl text-6xl font-serif font-semibold text-black">
              MiniTalk English Test
            </h1>
            <p className="text-xl font-serif text-gray-600">
              Our convenient, fast, and affordable English test integrates the
              latest assessment science and AI — empowering anyone to accurately
              test their English where and when they’re at their best.
            </p>
            <div className="flex justify-center border border-gray-500 p-5 bg-[#2e3b7b] w-2/3 rounded-3xl text-white font-bold text-xl shadow-2xl cursor-pointer mt-5 "onClick={()=>navigate('/minitalk-english-test')}>
              <button >Certify In English</button>
            </div>
          </div>
        </div>

        {/* Div Right */}

        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={england}
            alt=""
            className="lg:w-1/2 w-full lg:mt-0 rounded-full border shadow-2xl"
          />
        </div>
      </div>
      <div className="w-full mt-10 mb-10 justify-center flex ">
        <hr className="w-1/3 h-1 bg-gray-700 rounded-2xl" />
      </div>

      <div className="w-full flex justify-center lg:flex-row flex-col mb-36 mt-36">
        {/* Div Left */}
        <div className="lg:w-1/2 w-full flex justify-center ">
          <img
            src={france}
            alt=""
            className="lg:w-2/4 w-full rounded-full border shadow-2xl"
          />
        </div>

        {/* Div Right */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="flex flex-col gap-5 lg:w-2/3 w-full place-content-center">
            <h1 className="lg:text-8xl text-6xl font-serif font-semibold text-black mt-10 lg:mt-0">
            MiniTalk French Test
            </h1>
            <p className="text-xl font-serif text-gray-600">
            Our convenient, fast, and affordable French test integrates the
              latest assessment science and AI — empowering anyone to accurately
              test their French where and when they’re at their best.
            </p>
            <div className="flex justify-center border border-gray-500 p-5 bg-[#2e3b7b] w-2/3 rounded-3xl text-white font-bold text-xl shadow-2xl cursor-not-allowed mt-5 ">
              <button disabled>Certify In French</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 mb-10 justify-center flex ">
        <hr className="w-1/3 h-1 bg-gray-700 rounded-2xl" />
      </div>

      <div className="w-full flex justify-center lg:flex-row flex-col mt-36 mb-36">
        {/* Div Left */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="flex flex-col gap-5 lg:w-2/3 w-full place-content-center ">
            <h1 className="lg:text-8xl text-6xl font-serif font-semibold text-black">
            MiniTalk German Test
            </h1>
            <p className="text-xl font-serif text-gray-600">
            Our convenient, fast, and affordable German test integrates the
              latest assessment science and AI — empowering anyone to accurately
              test their German where and when they’re at their best.
            </p>
            <div className="flex justify-center border border-gray-500 p-5 bg-[#2e3b7b] w-2/3 rounded-3xl text-white font-bold text-xl shadow-2xl cursor-not-allowed mt-5 ">
              <button disabled>Certify In German</button>
            </div>
          </div>
        </div>

        {/* Div Right */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={german}
            alt=""
            className="lg:w-2/4 w-full mt-10 lg:mt-0 rounded-full border shadow-2xl"
          />
        </div>
        
        
      </div>
      <div className="w-full mt-10 mb-10 justify-center flex ">
        <hr className="w-1/3 h-1 bg-gray-700 rounded-2xl" />
      </div>



      <div className="w-full flex justify-center lg:flex-row flex-col mb-36 mt-36">
        {/* Div Left */}
        <div className="lg:w-1/2 w-full flex justify-center ">
          <img
            src={india}
            alt=""
            className="lg:w-2/4 w-full rounded-full border shadow-2xl object-cover"
          />
        </div>

        {/* Div Right */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="flex flex-col gap-5 lg:w-2/3 w-full place-content-center">
            <h1 className="lg:text-8xl text-6xl font-serif font-semibold text-black mt-10 lg:mt-0">
            MiniTalk Hindi Test
            </h1>
            <p className="text-xl font-serif text-gray-600">
            Our convenient, fast, and affordable Hindi test integrates the
              latest assessment science and AI — empowering anyone to accurately
              test their Hindi where and when they’re at their best.
            </p>
            <div className="flex justify-center border border-gray-500 p-5 bg-[#2e3b7b] w-2/3 rounded-3xl text-white font-bold text-xl shadow-2xl cursor-not-allowed mt-5 ">
              <button disabled>Certify In French</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 mb-10 justify-center flex ">
        <hr className="w-1/3 h-1 bg-gray-700 rounded-2xl" />
      </div>

      <div className="w-full flex justify-center lg:flex-row flex-col mt-36 mb-36">
        {/* Div Left */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="flex flex-col gap-5 lg:w-2/3 w-full place-content-center ">
            <h1 className="lg:text-8xl text-6xl font-serif font-semibold text-black">
            MiniTalk Italian Test
            </h1>
            <p className="text-xl font-serif text-gray-600">
            Our convenient, fast, and affordable Italian test integrates the
              latest assessment science and AI — empowering anyone to accurately
              test their Italian where and when they’re at their best.
            </p>
            <div className="flex justify-center border border-gray-500 p-5 bg-[#2e3b7b] w-2/3 rounded-3xl text-white font-bold text-xl shadow-2xl cursor-not-allowed mt-5 ">
              <button disabled>Certify In Italy</button>
            </div>
          </div>
        </div>

        {/* Div Right */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={italy}
            alt=""
            className="lg:w-2/4 w-full mt-10 lg:mt-0 rounded-full border shadow-2xl object-cover"
          />
        </div>
      </div>
       <div className="w-full mt-10 mb-10 justify-center flex ">
        <hr className="w-1/3 h-1 bg-gray-700 rounded-2xl" />
      </div>

      <div className="w-full flex justify-center lg:flex-row flex-col mb-36 mt-36">
        {/* Div Left */}
        <div className="lg:w-1/2 w-full flex justify-center ">
          <img
            src={portugal}
            alt=""
            className="lg:w-2/3 w-full rounded-full border shadow-2xl object-cover"
          />
        </div>

        {/* Div Right */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="flex flex-col gap-5 lg:w-2/3 w-full place-content-center">
            <h1 className="lg:text-8xl text-6xl font-serif font-semibold text-black mt-10 lg:mt-0">
            MiniTalk Portuguese Test
            </h1>
            <p className="text-xl font-serif text-gray-600">
            Our convenient, fast, and affordable Portuguese test integrates the
              latest assessment science and AI — empowering anyone to accurately
              test their Portuguese where and when they’re at their best.
            </p>
            <div className="flex justify-center border border-gray-500 p-5 bg-[#2e3b7b] w-2/3 rounded-3xl text-white font-bold text-xl shadow-2xl cursor-not-allowed mt-5 ">
              <button disabled>Certify In Portuguese</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 mb-10 justify-center flex ">
        <hr className="w-1/3 h-1 bg-gray-700 rounded-2xl" />
      </div>
      <div className="w-full flex justify-center lg:flex-row flex-col mt-36 mb-36">
        {/* Div Left */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="flex flex-col gap-5 lg:w-2/3 w-full place-content-center ">
            <h1 className="lg:text-8xl text-6xl font-serif font-semibold text-black">
            MiniTalk Spanish Test
            </h1>
            <p className="text-xl font-serif text-gray-600">
            Our convenient, fast, and affordable Spanish test integrates the
              latest assessment science and AI — empowering anyone to accurately
              test their Spanish where and when they’re at their best.
            </p>
            <div className="flex justify-center border border-gray-500 p-5 bg-[#2e3b7b] w-2/3 rounded-3xl text-white font-bold text-xl shadow-2xl cursor-not-allowed mt-5 ">
              <button disabled>Certify In Spanish</button>
            </div>
          </div>
        </div>

        {/* Div Right */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={spain}
            alt=""
            className="lg:w-2/4 w-full mt-10 lg:mt-0 rounded-full border shadow-2xl object-cover"
          />
        </div>
      </div>
      
    </div>
  );
};

export default PracticeTests;
