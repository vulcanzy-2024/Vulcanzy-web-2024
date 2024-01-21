import React from "react";
import Carousel from "../components/Carousel";
import { slides } from "../Constants/index";

const Gallery=()=>{
    return (
      <div className="text-white bg-black p-2 pt-4  md:p-6 w-full h-full">
        <div>
          {/* <div className="flex justify-between mb-2">
            <a href="rk" className="font-bold text-lg md:text-2xl font-serif">HOME</a>
            <a href="ke" className="font-bold text-lg md:text-2xl font-serif">REGISTER</a>
          </div> */}
          <div className="flex justify-around pe-5 mt-[5rem] md:pe-0">
            <h1 className="font-bold text-xl md:text-3xl font-cdb ">GALLERY</h1>
          </div>
        </div>
       
        <div className="flex justify-center items-center w-full h-[760px] mt-[-30px] md:mt-[0px] md:pt-[30px]  md:h-[430px] bg-black">
      <div className="max-w-2xl ">
        <Carousel autoSlide={true} >
          {[...slides.map((s) => (
            <img src={s} alt=""/>
          ))]}
        </Carousel>

      </div>
    </div>

        
      </div>
    );
}

export default Gallery
