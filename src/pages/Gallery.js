import React from "react";
import Carousel from "../components/Carousel";
import { slides, slides2, verticleSlides, verticleSlides2 } from "../Constants/index";
import Carouselv from "../components/Carouselv";

const Gallery = () => {
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

      <div className="flex justify-center items-center w-full  mt-[-30px] md:mt-[0px] md:pt-[30px]  bg-black">
        <div className="flex flex-wrap w-full justify-center gap-8 items-center  ">
          <Carousel autoSlide={true}>
            {[...slides.map((s) => <img src={s} alt="" />)]}
          </Carousel>

          <Carouselv autoSlide={true}>
            {[...verticleSlides.map((s) => <img src={s} alt="" />)]}
          </Carouselv>
          <Carousel autoSlide={true}>
            {[...slides2.map((s) => <img src={s} alt="" />)]}
          </Carousel>
          <Carouselv autoSlide={true}>
            {[...verticleSlides2.map((s) => <img src={s} alt="" />)]}
          </Carouselv>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
