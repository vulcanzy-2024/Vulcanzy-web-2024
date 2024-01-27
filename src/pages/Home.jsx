import logo from "../assets/images/home/VULCANZY_BLACK.png";
import { useInView } from "react-intersection-observer";
import React from "react";
import { useEffect } from "react";
import bgvideo from "../assets/video/Vulcanzy.mp4";
import des1 from "../assets/images/home/sunwaves.svg";
import clock from "../assets/images/home/Clock.svg";
import Timer from "../components/Timer";
import wave from "../assets/images/wave.png";
import { Link } from "react-router-dom";
import SponsorsC from "../components/SponsorsC";
const Home = () => {
  const { ref: slide, inView } = useInView();
  const { ref: design, inView: inView2 } = useInView();
  useEffect(() => {
    const designImg = document.getElementById("design");
    const waveImg = document.getElementById("wave");
    if (inView) {
      waveImg.classList.add("animate-slide");
    }
    if (inView2) {
      designImg.classList.add("animate-pop");
    }
  }, [inView, inView2]);
  return (
    <>
      <div className=" flex am:justify-around items-center flex-col sm:flex-row h-[100dvh] w-[100%] overflow-clip relative">
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

      <div className="bg-black  w-full h-[20rem] sm:h-max relative overflow-clip flex items-center -z-40 justify-start">
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

      <div className="bg-black -z-50 sca">
        <div className="w-full max-h-max  bg-black flex justify-center flex-col items-center relative overflow-clip -z-30">
         <SponsorsC/>
        </div>
      </div>

      <div className="bg-black flex justify-center relative h-[10rem] w-full items-center ">
        <a
          href="https://forms.gle/ioxrYNX1bx1nrogp7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="font-cdr bg-gradient-to-r from-[#ff66c4] to-[#00ffff] h-[3.5rem] rounded-full text-black text-[1.3rem] w-[10rem]">
            Register
          </button>
        </a>
      </div>
    </>
  );
};

export default Home;
