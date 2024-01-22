import React from "react";
import Events from "../components/Card";

const EventsPage = () => {
  return (
    <div className="text-white bg-black p-2 pt-4 md:p-6 w-full h-full relative overflow-clip">
      <div>
        {/* <div className="flex justify-between mb-2">
            <a href="rk" className="font-bold text-lg md:text-2xl font-serif">HOME</a>
            <a href="ke" className="font-bold text-lg md:text-2xl font-serif">REGISTER</a>
          </div> */}
        <div className="flex justify-around font-cdb mt-[10rem] pe-5 md:pe-0">
          <h1 className="font-bold text-xl md:text-3xl  ">EVENTS</h1>
        </div>
      </div>
      <Events />
    </div>
  );
};

export default EventsPage;
