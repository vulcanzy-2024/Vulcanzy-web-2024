import React from "react";
// import { sponsors, otherS } from "../Constants/sponsors";
import SponsorsC from "../components/SponsorsC";
const Sponsors = () => {
  return (
    <div className="bg-black -z-50 sca">
      <div className="w-full max-h-max mt-[8rem]  bg-black flex gap-14 justify-center flex-col items-center relative overflow-clip -z-30">
        <SponsorsC/>
      </div>
    </div>
  );
};

export default Sponsors;
