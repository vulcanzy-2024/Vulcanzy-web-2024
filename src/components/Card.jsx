import {Tilt} from "react-tilt";

import { events } from "../Constants/index.js";

const EventCard = ({
  index,
  poster,
  name,
  club,
  description
}) => {
  return (
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 pb-1 rounded-2xl sm:w-[360px] w-full'
      >

    <div className=" md:mt-5 relative font-cdb ">
    
      <div className="flex flex-col bg-gradient-to-bl from-orange-500 to-pink-500  items-center justify-end  backdrop-filter backdrop-blur-sm  relative max-w-sm max-h-[30rem] min-h-[30rem] gap-2  p-5 pt-4 border border-gray-200 rounded-lg shadow   dark:border-gray-700 ">
        {/* <img src={poster} className=" rounded-lg w-full " alt="" /> */}
        <h5 class="mb-1  text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          {name}
        </h5>
        <h5 class="mb-2  text-2xl font-bold tracking-tight text-gray-900">
          {club}
        </h5>
        <p class="font-sans w-[80%]  text-gray-200 ">
         {description.slice(0,140)+"..."}
        </p>
      </div>
    </div>
       </Tilt>
  );
};

const Events = () => {
  return (
    <>

      <div className='mt-5 md:mt-10  flex flex-wrap justify-center gap-7 md:gap-12'>
        {events.map((event, index) => (
          <EventCard key={`event-${index}`} index={index} {...event} />
        ))}
      </div>
    </>
  );
};

export default Events;
