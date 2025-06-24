import React from "react";
import heroImage from "../../public/images/header.jpg";

const Hero = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-3 md:gap-6 lg:gap-10 bg-[url("../../public/images/header.jpg")] bg-cover bg-center'>
      <h1 className="text-center text-2xl md:text-5xl lg:text-8xl tracking-[3px]  font-bold text-white ">
        Dramatically Engage
      </h1>
      <p className="text-white text-center text-sm md:text-lg lg:text-xl ">
        Objectively innovate empowered manufactured products whereas parallel
        platforms.
      </p>
      <div className="mt-5">
        <button className="px-4 md:px-10 py-2 md:py-5 border-none outline-none rounded-full bg-[yellowgreen] text-white hover:bg-[#8cbb2e] text-sm md:text-lg lg:text-xl">
          ENGAGE NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;
