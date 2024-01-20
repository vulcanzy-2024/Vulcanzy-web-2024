import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='w-[100vw] bg-black px-[2rem] py-[2rem] flex flex-col gap-[3rem] justify-center items-center'>
        <div className='w-full flex gap-[2.5rem] md:flex-row flex-col justify-between items-start text-white'>
            <div className='md:w-auto w-full flex flex-col gap-[1rem] md:justify-start md:items-start justify-center items-center'>
                <div className='w-full flex justify-center items-center'><img src={logo} className='w-[200px]'/></div>
                <p className='text-white font-semibold text-center text-[1.25rem]'>Vulcanzy 2K24 - Cultural Fest</p>
                <div className='w-full flex gap-[2rem] justify-center items-center'>
                    <FaXTwitter className='cursor-pointer text-[2rem] text-white hover:scale-105 transition-all duration-200' />
                    <FaInstagram className='cursor-pointer text-[2rem] text-white hover:scale-105 transition-all duration-200' />
                </div>
            </div>
            <div className='md:w-auto w-full flex flex-col gap-[1rem] md:justify-start md:items-start justify-center items-center'>
                <h1 className='text-[1.25rem] font-semibold text-[white]'>Contact Us</h1>
                <p className='text-white text-[1rem]'>+91 1212121212</p>
            </div>
            <div className='md:w-auto w-full flex flex-col gap-[1rem] md:justify-start md:items-start justify-center items-center'>
                <h1 className='text-[1.25rem] font-semibold text-[white]'>Address</h1>
                <p className='text-white text-center text-[1rem]'>Old Aerodrome near kondruprolu, Tadepalligudem, AP - 534101</p>
            </div>
            <div className='md:w-auto w-full flex flex-col gap-[1rem] md:justify-start md:items-start justify-center items-center'>
                <h1 className='text-[1.25rem] font-semibold text-[white]'>Email</h1>
                <p className='text-white text-[1rem]'>Vulcanzy@nitandhra.ac.in</p>
            </div>
        </div>
        <div className='w-full flex md:flex-row flex-col justify-between text-white items-center gap-[1rem]'>
            <div className=''>© Copyright NIT-Andhra Pradesh</div>
            <div className='flex justify-center items-center gap-[1rem]'>
                <p className='text-[1rem] text-white cursor-pointer'>Privacy & Policy</p>
                <p className='text-[1rem] text-white cursor-pointer'>Terms & Conditions</p>
            </div>
        </div>
    </div>
  )
}

export default Footer