import React from "react";
const wave = require("../images/wave.png");
const Home = () => {
  return (
    <div>
      <div className="bg-black/70 flex-col flex justify-center items-center h-[100dvh] w-full ">
        <div className="absolute top-4 left-10 text-[1.5rem] font-cdb  text-white">
          <p className="text-left">
            National Institite of Technology <br /> Andhra pradesh
          </p>
        </div>
        <div className=""></div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-white text-[3.456rem] font-cdb"> VULCANZY </p>
          <p className="font-sans text-white text-[2.5rem]">CULTURAL FEST</p>
          <p className="font-cdb text-[2rem] text-white">2024</p>
        </div>
        <div className="w-full">
          <p className="text-white absolute bottom-5 w-full text-center text-[1.23rem]">
            Register to avail accomodation
          </p>
        </div>
      </div>
      <div className="bg-black flex justify-center items-center h-[100dvh] w-full ">
        <div className="w-[35%]">
          <img src={wave} alt="" />
        </div>
        <div className="w-[60%] flex flex-col justify-center items-center">
          <p className="text-white text-[5em] font-cdb"> TARANG </p>
          <p className="text-white text-[1.8rem]  text-center mt-5 font-cdb line-clamp-3">
            VULCANZY'24 IS A PRESTIGIOUS EVENT OF <br /> THE YEAR AT{" "}
            <span className="font-cdb text-pink-500">NIT ANP</span>
          </p>
          <p className="text-white text-[1.8rem] font-cdb text-center mt-5">
            COME AND JOIN US ON{" "}
            <span className="font-cdb text-orange-500">2-2-24</span> AND{" "}
            <span className="font-cdb text-orange-500">3-2-24</span>
            <br /> TO HAVE A FEAST FOR THE EYES
          </p>
        </div>
      </div>
      <div className="bg-black flex justify-center h-[10rem] w-full items-center ">
        <button className="font-cdr bg-gradient-to-r from-[#ff66c4] to-[#00ffff] h-[3.5rem] rounded-full text-black text-[1.3rem] w-[10rem]"> 
        Register
        </button>
      </div>
      <div className="bg-red-400 h-[100dvh] w-full "></div>
      <div className="bg-blue-400 h-[100dvh] w-full "></div>
    </div>
  );
};

export default Home;
