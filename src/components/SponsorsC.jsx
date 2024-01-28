import React from "react";
import { sponsors, otherS } from "../Constants/sponsors";
const SponsorsC = () => {
  return (
    <div className="flex justify-center flex-col items-center  gap-14">
      <p className="text-white font-cdr  text-3xl">Our Sponsors</p>
      <div className="h-[90%] flex flex-wrap justify-center items-center md:grid grid-cols-3 justify-items-center  w-full">
        {sponsors.map((sponsor) => (
          <div className="flex  flex-col items-center  m-5 gap-5">
            {sponsor.imp ? (
              <img
                src={sponsor.images}
                className="w-auto scale-[2] h-[4rem] sm:h-[5rem] md:h-[6rem]"
                alt=""
              />
            ) : (
              <img
                src={sponsor.images}
                className="w-auto h-[4rem] sm:h-[5rem] md:h-[6rem]"
                alt=""
              />
            )}
            <p className="text-white font-cdr text-center text-2xl">
              {sponsor.title}{" "}
            </p>
          </div>
        ))}
      </div>
          <p className="text-white font-cdr text-3xl">Other Sponsors</p>
        <div className="flex flex-wrap justify-center items-center">

          {otherS.map((sponsor) => (
            <div className="flex  m-5 gap-6">
              {sponsor.imp ? (
                <img
                  src={sponsor.images}
                  className="w-auto h-[7rem] sm:h-[8rem] md:h-[9rem]"
                  alt=""
                />
              ) : (
                <img
                  src={sponsor.images}
                  className="w-auto h-[4rem] sm:h-[5rem] md:h-[5rem]"
                  alt=""
                />
              )}
              <p className="text-white font-cdr text-center text-2xl">
                {sponsor.title}{" "}
              </p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default SponsorsC;
