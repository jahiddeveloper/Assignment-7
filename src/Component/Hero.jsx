import React from "react";
import vector1 from "../assets/vector1.png";

const Hero = () => {
  return (
    <div className="md:w-11/12 mx-auto font mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="">
        <div className="bg-gradient-to-l from-[#9f62f2] to-[#632ee3] text-center text-white rounded-xl mx-2 md:mx-0 md:flex md:justify-between md:items-center py-15 md:py-0">
          <img className="hidden md:block" src={vector1} alt="" />
          <div>
            <h2 className="text-xl font-bold">In-Progress</h2>
            <p className="text-5xl font-bold mt-4">0</p>
          </div>
          <img
            className="transform scale-x-[-1] hidden md:block"
            src={vector1}
            alt=""
          />
        </div>
      </div>

      <div className="">
        <div className="bg-gradient-to-l from-[#00827a] to-[#54cf68] text-center text-white rounded-xl mx-2 md:mx-0 md:flex md:justify-between md:items-center py-15 md:py-0">
          <img className="hidden md:block" src={vector1} alt="" />
          <div>
            <h2 className="text-xl font-bold">Resolved</h2>
            <p className="text-5xl font-bold mt-4">0</p>
          </div>
          <img
            className="transform scale-x-[-1] hidden md:block"
            src={vector1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
