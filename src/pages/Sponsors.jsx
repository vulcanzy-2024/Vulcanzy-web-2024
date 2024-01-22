import React from "react";
import sponsors from "../Constants/sponsors";
const Sponsors = () => {
  return (
    <div className="bg-black -z-50 sca">
      <div className="w-full max-h-max mt-[8rem]  bg-black flex justify-center flex-col items-center relative overflow-clip -z-30">
        <p className="text-white font-cdb  text-3xl">Our Sponsors</p>
        {/* <div className="opacity-60 bg-blue_bubbles w-[20rem] h-[20rem] absolute -right-[4rem] bottom-0 sm:w-[30rem] sm:h-[30rem] bg-contain   bg-no-repeat -z-10"></div>
        <div className="opacity-60 bg-pastle w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] absolute -left-[8rem] top-5 sm:-left-[12rem] sm:-top-10 bg-contain   bg-no-repeat -z-20"></div> */}
        <div className="h-[90%] flex flex-wrap justify-center items-center md:grid grid-cols-3 justify-items-center w-full">
          {sponsors.map((sponsor) => (
            <div className="flex justify-center flex-col items-center m-5 gap-5">
              <img src={sponsor.images} className="w-auto h-[6rem]" alt="" />
              <p className="text-white font-cdr text-center text-2xl">
                {sponsor.title}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
