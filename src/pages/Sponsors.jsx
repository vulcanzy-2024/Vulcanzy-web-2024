import React from "react";
// import { sponsors, otherS } from "../Constants/sponsors";
import SponsorsC from "../components/SponsorsC";
const Sponsors = () => {
  return (
    <div className="bg-black ">
      <div className="w-full max-h-max mt-[8rem]  bg-black flex gap-14 justify-center flex-col items-center relative overflow-clip">
        <SponsorsC/>
      </div>
    </div>
  );
};

export default Sponsors;
