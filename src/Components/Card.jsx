import {Tilt} from "react-tilt";

import { events } from "../Constants/index.js";

const EventCard = ({
  index,
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

    <div className=" md:mt-5">
      <div class="block bg-pink-500 max-w-sm h-[350px]  p-5 pt-4 border border-gray-200 rounded-lg shadow hover:bg-pink-400  dark:border-gray-700 ">
        <h5 class="mb-1  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {club}
        </h5>
        <p class="font-normal text-gray-200 ">
         {description}
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