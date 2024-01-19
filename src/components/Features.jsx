import React from "react";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";

const Features = () => {
  return (
    <div className="lg:mt-20 mt-0 p-10 w-full">
      <h1 className="lg:text-8xl text-6xl font-semibold font-sans lg:mt-0 mt-10 lg:p-0 p-5 text-center mb-20">
        Unique features of our{" "}
        <span className="text-orange-500 animate-pulse">learning platform</span>
      </h1>
      <div className="w-full flex justify-center lg:flex-row flex-col">
        {/* Div Left */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img src={hero2} alt="" className="lg:w-2/4 w-full" />
        </div>

        {/* Div Right */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="flex flex-col gap-5 lg:w-2/3 w-full place-content-center">
            <h1 className="lg:text-8xl text-6xl font-serif font-semibold text-black mt-10 lg:mt-0">
              Backed By Science
            </h1>
            <p className="text-xl font-serif text-gray-600">
              Our courses leverage a blend of evidence-based teaching approaches
              and engaging content to proficiently impart reading, writing,
              listening, and speaking skills.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 mb-10 justify-center flex ">
      <hr className="w-1/3 h-1 bg-gray-700 rounded-2xl"/>
      </div>

      <div className="w-full flex justify-center mt-20 lg:flex-row flex-col">
        {/* Div Left */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="flex flex-col gap-5 lg:w-2/3 w-full place-content-center">
            <h1 className="lg:text-8xl text-6xl font-serif font-semibold text-black">
            free, fun and effective
            </h1>
            <p className="text-xl font-serif text-gray-600">
            Engaging with Minitalk is enjoyable, and research indicates its effectiveness! Through brief, easily digestible lessons, you'll accumulate points and progress through levels, all while acquiring practical communication skills for the real world.
            </p>
          </div>
        </div>

        {/* Div Right */}
       
        <div className="lg:w-1/2 w-full flex justify-center">
          <img src={hero3} alt="" className="lg:w-2/4 w-full lg:mt-0`" />
        </div>
      </div>
      <div className="w-full mt-10 mb-10 justify-center flex ">
      <hr className="w-1/3 h-1 bg-gray-700 rounded-2xl"/>
      </div>
      <div className="w-full flex justify-center mt-20 lg:flex-row flex-col">
        {/* Div Left */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img src={hero4} alt="" className="lg:w-2/4 w-full mt-10 lg:mt-0" />
        </div>

        {/* Div Right */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="flex flex-col gap-5 lg:w-2/3 w-full place-content-center ">
            <h1 className="lg:text-8xl text-6xl font-serif font-semibold text-black">
            personalized learning
            </h1>
            <p className="text-xl font-serif text-gray-600">
            By integrating cutting-edge AI technology with language science expertise, our lessons are customized to assist you in learning at an optimal level and pace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
