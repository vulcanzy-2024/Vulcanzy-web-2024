import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { GiCrossMark } from "react-icons/gi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const link="https://drive.google.com/file/d/1lOn0HohR-UrVrHURFUnclhwrxr8Z-lmL/view?usp=sharing"
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // const handleBrochureDownload = () => {
  //   // Handle brochure download logic
  // };

  return (
    <>
      <nav className="bg-opacity-20 backdrop-filter backdrop-blur-sm border-b-2 z-10 border-white p-4 fixed w-full ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Techkriya Logo" className="w-[100px]" />
            <div className="ml-4">
              <NavLink to="/" className="text-white font-bold text-lg">
                VULCANZY’24
              </NavLink>
              <p className="text-white text-sm font-light">
                NIT Andhra Pradesh
              </p>
            </div>
          </div>

          <div className="hidden  md:flex items-center space-x-4">
            <NavLink to="/events" className="text-white">
              Events
            </NavLink>
            <NavLink to="/gallery" className="text-white">
              Gallery
            </NavLink>
            <NavLink to="/sponsors" className="text-white">
              Our Sponsors
            </NavLink>
            <NavLink to="/hostelAccomodation" className="text-white">
              Hostel Accomodation
            </NavLink>
            {/* <a href="https://drive.google.com/file/d/1lOn0HohR-UrVrHURFUnclhwrxr8Z-lmL/view?usp=sharing" target="blank" className="text-white"> */}
            <a href={link} target="black" className="text-white">
              BROCHURE
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={toggleDrawer} className="text-white">
              <IoMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="md:hidden bg-opacity-90 z-20 backdrop-filter backdrop-blur-sm fixed inset-0 bg-gray-800">
          {/* Drawer content */}
          <div className="w-4/5 flex flex-col gap-[2rem]  bg-slate-100 bg-opacity-10 pt-[2rem] h-full p-4 transform transition-transform ease-in-out duration-300">
            <div className="w-full flex justify-end">
              <button onClick={toggleDrawer} className="text-white text-[2rem]">
                <GiCrossMark />
              </button>
            </div>
            <ul className="w-full mt-4 space-y-5 font-bold">
              <li className="w-full text-center">
                <NavLink to="/" className="text-white w-full text-center">
                  Home
                </NavLink>
              </li>
              <li className="w-full text-center">
                <NavLink
                  to="/events"
                  className="text-white w-full text-center"
                  onClick={toggleDrawer}
                >
                  Events
                </NavLink>
              </li>
              <li className="w-full text-center">
                <NavLink
                  to="/gallery"
                  className="text-white w-full text-center"
                >
                  Gallery
                </NavLink>
              </li>
              <li className="w-full text-center">
                <NavLink
                  to="/hostelAccomodation"
                  className="text-white w-full text-center"
                >
                  Hostel Accomodation
                </NavLink>
              </li>

              <li className="w-full text-center">
                <NavLink
                  to="/sponsors"
                  className="text-white w-full text-center"
                  onClick={toggleDrawer}
                >
                  Our Sponsors
                </NavLink>
              </li>
              <li className="w-full text-center">
                <a
                  href={link}
                  target="black"
                  className="text-white w-full text-center"
                >
                  BROCHURE
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
