import logo from "../images/home/VULCANZY_BLACK.png";
import React from "react";
import bgvideo from "../images/video/Vulcanzy.mp4";
import des1 from "../images/home/sunwaves.svg";
import clock from "../images/home/Clock.svg";
import Timer from "../components/Timer";
const wave = require("../images/wave.png");
const Home = () => {
  return (
    <>

      <div className=" bg-[#808080]/50 flex justify-around items-center h-[100dvh] w-[100%] overflow-clip relative">
        
        <div className="absolute top-4 left-10 text-[1.5rem] font-cdb  text-white">
          <p className="text-left">
            National Institite of Technology <br /> Andhra pradesh
          </p>
        </div>
        <div className="absolute w-full -z-20">
          <video
            src={bgvideo}
            autoPlay
            loop
            className="w-[100%]  h-[100dvh] object-cover"
          ></video>
        </div>
        <div className="w-[50%] ">
          <img src={logo} className="opacity-60" alt="" />
        </div>
        <div className="flex w-[45%] flex-col justify-center items-center">
          <p className="text-white text-[5.456rem] font-cdb"> VULCANZY </p>
          <p className="font-cdb text-white  text-[2.4rem]">Cultural Fest</p>
          <p className="font-cdb text-[2.3rem] text-white">2024</p>
        </div>
        <div className="w-full absolute bottom-2">
          <p className="text-white absolute bottom-5 w-full text-center text-[1.4rem]">
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

      <div className="bg-black -z-20 w-full h-[100dvh] relative  flex items-center justify-start">
        <img src={des1} alt="" className="w-[70%] absolute right-0 " />
        <div className=" ml-5  justify-around items-center flex flex-col">
          <p className="font-cdb text-[2rem] text-white ">
            WAVES ARE ABOUT TO RUSH IN
          </p>
          <div className="mt-5 w-[32rem]">
            <Timer />
          </div>
          <img
            src={clock}
            alt=""
            className="w-[23rem] align-middle -mt-[4rem] -z-10"
          />
        </div>
      </div>

      <div className="bg-black h-[100dvh] w-full flex justify-center items-center overflow-clip relative -z-20">
        <div className="bg-right_wave w-[40rem] h-[40rem] bg-cover absolute -right-[19rem] -z-10"></div>
        <div className="bg-left_wave w-[40rem] h-[40rem] bg-cover absolute -left-[19rem] -z-10"></div>
        <div className="grid grid-cols-2 grid-rows-2 justify-items-center   w-[85%] h-full">
          <div className="  bg-pink_drop  self-center w-[35rem] h-[35rem] bg-cover flex justify-center items-center">
              <p className="font-cdb text-xl  text-center  ">Events</p>
          </div>
          <div className="bg-blue_drop  self-center w-[35rem] h-[35rem] bg-cover flex justify-center items-center">
            <p className="font-cdb text-xl  text-center  ">Gallery</p>
          </div>
          <div className="  col-span-2 self-center  flex justify-center">
            <div className="  bg-purple_drop   w-[35rem] h-[35rem] bg-cover flex justify-center items-center">
            <p className="font-cdb text-xl text-center text-wrap w-[9rem] -ml-[4rem] mt-2 ">Accomodation Details</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[100dvh] bg-black">

      </div>

      <div className="bg-black flex justify-center h-[10rem] w-full items-center ">
        <button className="font-cdr bg-gradient-to-r from-[#ff66c4] to-[#00ffff] h-[3.5rem] rounded-full text-black text-[1.3rem] w-[10rem]">
          Register
        </button>
      </div>
    </>
  );
};

export default Home;
