import logo from "../assets/images/home/VULCANZY_BLACK.png";
import { useInView } from "react-intersection-observer";
import React from "react";
import { useEffect } from "react";
import bgvideo from "../assets/video/Vulcanzy.mp4";
import des1 from "../assets/images/home/sunwaves.svg";
import clock from "../assets/images/home/Clock.svg";
import Timer from "../components/Timer";
import sponsors from "../Constants/sponsors";
// import bubble from "../assets/images/home/Purple drop.svg";
// import Nit_Logo from "../images/home/NITAP_LOGO.png";
import wave from "../assets/images/wave.png";
import { Link } from "react-router-dom";
const Home = () => {
  const { ref:slide, inView } = useInView()
  const {ref:design,inView:inView2}=useInView()
    useEffect(() => {
      const designImg=document.getElementById("design")
      const waveImg=document.getElementById("wave")
      if(inView){
        waveImg.classList.add("animate-slide")
      }
      if(inView2){
        designImg.classList.add("animate-pop")
      }
  
    }
    , [inView,inView2])
  return (
    <>
      <div className=" flex am:justify-around items-center flex-col sm:flex-row h-[100dvh] w-[100%] overflow-clip relative">
        {/* <div className="absolute top-4 left-10 flex text-white gap-5 justify-center items-center">
          <img
            src={Nit_Logo}
            alt=""
            className="w-[3rem]  md:w-[5rem] sm:w-[4rem]"
          />
          <p className="text-left  font-cdb text-[1rem] sm:text-[1.2rem] md:text-[1.5rem]">
            National Institite of Technology <br /> Andhra pradesh
          </p>
        </div> */}
        <div className="absolute w-full -z-10">
          <div className="w-full h-[100dvh] bg-[#808080]/50  absolute"></div>
          <video
            src={bgvideo}
            autoPlay
            loop
            className="w-[100%]  h-[100dvh] object-cover"
          ></video>
        </div>
        <div className="w-[80%] mt-10 sm:mt-0 sm:w-[50%] ">
          <img src={logo} className="opacity-60" alt="" />
        </div>
        <div className="flex w-[90%]  -mt-10 sm:-mt-0 sm:w-[45%] flex-col justify-center items-center">
          <p className="text-white text-[2.8rem] sm:text-[3.3rem] md:text-[4.456rem] lg:text-[5.5rem] font-cdb">
            {" "}
            VULCANZY{" "}
          </p>
          <p className="font-cdb text-white text-[1.4rem] sm:text-[1.8rem] md:text-[2.4rem] ">
            Cultural Fest
          </p>
          <p className="font-cdb sm:text-[1.7rem] md:text-[2.3rem] text-[1.4rem] text-white">
            2024
          </p>
        </div>
        <div className="w-full absolute bottom-2">
          <p className="text-white absolute bottom-5 w-full text-center sm:text-[1.2rem] md:text-[1.4rem]">
            <Link to="/hostelAccomodation">Register to avail accomodation</Link>
          </p>
        </div>
      </div>

      <div className="bg-black flex p-6 sm:p-5 flex-col tracking-wide sm:flex-row md:flex-row justify-center relative items-center  w-full ">
        <div className="w-[45%]  sm:w-[35%]" id="wave" ref={slide}>
          <img src={wave} alt="" />
        </div>
        <div className="w-full sm:w-[60%] flex flex-col justify-center -mt-3 sm:mt-0 md:-mt-2 items-center">
          <p className="text-white text-[1.9rem] sm:text-[3.8rem] md:text-[4rem] lg:text-[5rem] font-cdb">
            {" "}
            TARANG{" "}
          </p>
          <p className="text-white ga  sm:text-[1rem] md:text-[1.4rem]  text-center mt-3 sm:mt-5 font-cdb ">
            VULCANZY'24 IS A PRESTIGIOUS EVENT OF <br /> THE YEAR AT{" "}
            <span className="font-cdb text-pink-500">NIT ANP</span>
          </p>
          <p className="text-white   sm:text-[1rem] md:text-[1.4rem] font-cdb text-center mt-5">
            COME AND JOIN US ON{" "}
            <span className="font-cdb text-orange-500">2-2-24</span> AND{" "}
            <span className="font-cdb text-orange-500">3-2-24</span>
            <br /> TO HAVE A FEAST FOR THE EYES
          </p>
        </div>
      </div>

      <div className="bg-black  w-full h-[20rem]  relative overflow-clip flex items-center -z-40 justify-start">
        <div className=" ml-5  justify-around items-center flex flex-col w-full md:w-[50%]">
          <p className="font-cdb text-[1rem] w-full text-center sm:text-[1.5rem]  lg:text-[2rem] text-white ">
            WAVES ARE ABOUT TO RUSH IN
          </p>
          <div className="mt-5  md:w-[32rem]">
            <Timer />
          </div>
          <img
            src={clock}
            alt=""
            className=" w-0 md:w-[20rem] sm:w-[17rem] lg:w-[23rem] md:-mt-[4rem] -z-10"
          />
          <img
          id="design"
          ref={design}
            src={des1}
            alt=""
            className="opacity-35   md:opacity-100  md:w-[70%] absolute right-0 md:-right-20  "
          />
        </div>
      </div>
      {/* 
      <div className="bg-black w-full  flex justify-center font-lazy items-center overflow-clip relative -z-20">
        <div className="bg-right_wave  bg-contain w-[20rem]  bg-no-repeat h-[20rem] sm:h-[25rem] md:h-[30rem] sm:w-[25rem] md:w-[30rem]  absolute -right-[10rem] sm:-right-[11rem] md:-right-[15rem]   -z-10"></div>
        <div className="bg-left_wave  w-[20rem] bg-contain   bg-no-repeat h-[20rem] sm:h-[25rem] md:h-[30rem] sm:w-[25rem] md:w-[30rem]  absolute -left-[10rem] sm:-left-[12rem] md:-left-[16rem]  "></div>
        <div className="grid relative -top-20  grid-cols-2 gap-12 grid-rows-2 justify-items-center   w-[70%] h-[50%]">
          <div className="  p-5 self-center relative w-[15rem] h-[15rem] sm:w-[25rem]  sm:h-[25rem] md:w-[35rem] md:h-[35rem] bg-contain   bg-no-repeat flex justify-center items-center">
            <img src={bubble} className="absolute " alt="" />
            <p className=" text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] z-[2] ">Events</p>
          </div>
          <div className="bg-blue_drop  self-center w-[15rem] h-[15rem] sm:w-[25rem]  sm:h-[25rem] md:w-[35rem] md:h-[35rem]  bg-contain   bg-no-repeat flex justify-center items-center">
            <p className=" text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem]  text-center  ">Gallery</p>
          </div>
          <div className="  col-span-2 self-center  flex justify-center">
            <div className="  bg-purple_drop  w-[15rem] h-[15rem]  sm:w-[30rem]  sm:h-[30rem] md:w-[35rem] md:h-[35rem]  bg-contain   bg-no-repeat flex justify-center items-center -mt-60 sm:mt-0">
              <p className=" text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] text-center text-wrap w-[9rem] -ml-5 sm:-ml-[3rem] sm:mt-9 md:mt-5">
                Accomodation Details
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-full  bg-black flex justify-center flex-col items-center relative overflow-clip -z-30">
        <p className="text-white font-cdr text-2xl sm:text-3xl md:text-4xl">Our Sponsors</p>
        {/* <div className="opacity-60 bg-blue_bubbles w-[20rem] h-[20rem] absolute -right-[4rem] bottom-0 sm:w-[30rem] sm:h-[30rem] bg-contain   bg-no-repeat -z-10"></div>
        <div className="opacity-60 bg-pastle w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] absolute -left-[8rem] top-5 sm:-left-[12rem] sm:-top-10 bg-contain   bg-no-repeat -z-20"></div> */}
        <div className="h-[90%] flex flex-wrap justify-center items-center md:grid grid-cols-3 justify-items-center w-full">
          {sponsors.map((sponsor) => (
            <div className="flex justify-center flex-col items-center m-5 gap-5">
              <img src={sponsor.images} className="w-auto h-[4rem] sm:h-[5rem] md:h-[6rem]" alt="" />
              <p className="text-white font-cdr text-center sm:text-xl md:text-2xl">{sponsor.title} </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black flex justify-center relative h-[10rem] w-full items-center ">
        <button className="font-cdr bg-gradient-to-r from-[#ff66c4] to-[#00ffff] h-[3.5rem] rounded-full text-black text-[1.3rem] w-[10rem]">
          Register
        </button>
      </div>
    </>
  );
};

export default Home;
