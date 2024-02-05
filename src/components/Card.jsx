import { Link } from "react-router-dom";
import { events } from "../Constants/index.js";
const link =
  "https://unstop.com/college-fests/vulcanzy-national-institute-of-technology-andhra-pradesh-198269";
const EventCard = ({ image, name, club, description }) => {
  return (
    <>
      {name === "Box Cricket" ? (
        <>
          <div
            className=" group p-3 pb-1 rounded-2xl  w-[360px]"
          >
            <div className=" md:mt-5 relative font-cdb ">
            <div className="flex flex-col  bg-gradient-to-bl from-orange-500 to-pink-500  items-center justify-end  backdrop-filter backdrop-blur-sm  relative  md:max-w-xs max-h-[30rem] min-h-[30rem] gap-2  p-5 pt-4 border border-gray-200 rounded-lg  dark:border-gray-700 hover:scale-105 hover:shadow-[10px_15px_60px_-10px_rgba(0,0,0,0.3)] hover:shadow-pink-400 transform transition-all duration-200">
                <img
                  src={image}
                  className=" rounded-lg    top-0 absolute -z-10"
                  alt=""
                />
                <div className="flex w-full flex-col justify-center items-center rounded-lg bg-black border-xl bg-opacity-50 ">
                  <h5 className="mb-1  text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                    {name}
                  </h5>
                  <p className="text-center visible group-hover:hidden text-[#e9b949]">Click/Hover to view Description</p>
                  <p className="font-sans p-[0.2rem]  hidden duration-200 group-hover:flex flex-col justify-center items-center text-center text-gray-200 ">
                    <p>{description.first}</p>
                    <p><span className="font-bold text-lg"> Equipment:</span> {description.equipment}</p>
                    <p><span className="font-bold text-lg"> Teams:</span> {description.teams}</p>
                    <p><span className="font-bold text-lg"> Rules:</span> {description.rules}</p>
                  </p>
                  <h5 className="m-2 text-2xl tracking-tight ">{club}</h5>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Link target="_blank" to={link}>
          <div
            className=" p-3 pb-1 rounded-2xl  w-[360px]   "
          >
            <div className=" md:mt-5 relative font-cdb ">
              <div className="flex flex-col  bg-gradient-to-bl from-orange-500 to-pink-500  items-center justify-end  backdrop-filter backdrop-blur-sm  relative  md:max-w-xs max-h-[30rem] min-h-[30rem] gap-2  p-5 pt-4 border border-gray-200 rounded-lg  dark:border-gray-700 hover:scale-105 hover:shadow-[10px_15px_60px_-10px_rgba(0,0,0,0.3)] hover:shadow-pink-400 transform transition-all duration-200">
                <img
                  src={image}
                  className=" rounded-lg  top-0 absolute -z-10"
                  alt=""
                />
                <div className="flex flex-col justify-center items-center rounded-lg bg-black border-xl bg-opacity-50 p-2">
                  <h5 className="mb-1  text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                    {name}
                  </h5>

                  <p className="font-sans w-[90%] text-center text-gray-200 ">
                    {description.slice(0, 140) + "..."}
                  </p>
                  <h5 className="m-2 text-2xl tracking-tight ">{club}</h5>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

const Events = () => {
  return (
    <>
      <div className="mt-5 md:mt-10  flex flex-wrap items-center justify-center gap-7 md:gap-12">
        {events.map((event, index) => (
          <EventCard key={`event-${index}`} index={index} {...event} />
        ))}
      </div>
    </>
  );
};

export default Events;
