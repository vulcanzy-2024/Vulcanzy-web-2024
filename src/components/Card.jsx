// import {Tilt} from "react-tilt";

import { events } from "../Constants/index.js";

const EventCard = ({
  index,
  image,
  name,
  club,
  description
}) => {
  return (
      <div
        // options={{
        //   max: 45,
        //   scale: 1,
        //   speed: 450,
        // }}
        className='bg-tertiary p-5 pb-1 rounded-2xl sm:w-[360px] w-full '
      >

    <div className=" md:mt-5 relative font-cdb ">
    
      <div className="flex flex-col  bg-gradient-to-bl from-orange-500 to-pink-500  items-center justify-end  backdrop-filter backdrop-blur-sm  relative  md:max-w-xs max-h-[30rem] min-h-[30rem] gap-2  p-5 pt-4 border border-gray-200 rounded-lg  dark:border-gray-700 hover:scale-105 hover:shadow-[10px_15px_60px_-10px_rgba(0,0,0,0.3)] hover:shadow-pink-400 transform transition-all duration-200">
        <img src={image} className=" rounded-lg  object-contain  top-0 absolute -z-10" alt="" />
        <div className="flex flex-col justify-center items-center rounded-lg bg-black border-xl bg-opacity-50 p-2">

        <h5 class="mb-1  text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          {name}
        </h5>
        {/* <h5 class="mb-2  text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-orange-600 to-pink-600"> */}
      
        <p class="font-sans w-[90%] text-center text-gray-200 ">
         {description.slice(0,140)+"..."}
        </p>
        <h5 class="m-2 text-2xl tracking-tight ">
          {club}
        </h5>
        </div>
      </div>
    </div>
       </div>
  );
};

const Events = () => {
  return (
    <>

      <div className='mt-5 md:mt-10  flex flex-wrap items-center justify-center gap-7 md:gap-12'>
        {events.map((event, index) => (
          <EventCard key={`event-${index}`} index={index} {...event} />
        ))}
      </div>
    </>
  );
};

export default Events;
