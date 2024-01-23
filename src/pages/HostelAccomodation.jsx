import React from 'react'
import { Link } from 'react-router-dom'
import './hostelAccomodation.css'
// import wave from '../assets/waves.png'

const HostelAccomodation = () => {

    const rules = [
        "There will be no spot registration for hostel accommodation. All the interested students have to do pre-registration through Vulcanzy website.",
        "Room allotment will be done on a first come first serve basis as there are only a few rooms available.",
        "After registering for their stay in the campus, they will be provided with a registration slip which they need to submit on visiting the campus to get their visiting ID-cards in return.",
        "Accommodation will be provided with one iron cot, mattress and one cupboard based on the availability.",
        "Registration will begin from 24nd january 2024 and the registration portal will be closed when all the rooms are filled.",
        "Visitors should carry their college ID Card and any government ID Card (like Aadhaar card, driving license, PAN Card, etc.) – original and photocopy & 2 passport size photographs.        ",
        "Registered students have to directly report to the hostel office for fee payment and further procedures.(The Hostel office is located at the Ground floor of Central vista).",
        "The registration fee for staying in the campus is ₹. 330 per day including food and lodging and the payment can be done through cash/UPI.",        
        "Visitors are responsible for their own valuables & bring their own lock & keys. ",
        "Visitors are not allowed to carry any electrical gadgets like iron box, electric kettle, immersion rod, etc.",
        "The room will be on a sharing basis.",
        "No visitors will be allowed to stay after 10:00 AM on 26th February, 2023.",
        "All the guests have to strictly adhere to the institute rules, regulations and guidelines.",
    ]

  return (
    <>
        <div className='w-full flex flex-col py-[3rem] bg-black'>
            <div className='md:w-[80%] w-[90%] mx-auto flex flex-col mt-[6rem] gap-[2rem]'>
                <div className='flex w-full gap-[1rem] justify-between text-white font-cinzel items-center md:text-[26px] text-[20px] text-center font-medium'>
                    <Link to={'/'}><div className='md:text-[26px] text-[16px] cursor-pointer'>Home</div></Link>
                    <div>Hostel Accomodation</div>
                    <Link target='_blank' to={'https://forms.gle/ioxrYNX1bx1nrogp7'}><div className='md:text-[24px] text-[16px] cursor-pointer'>Register</div></Link>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <div className='md:px-[3rem] px-[1.5rem] md:py-[1rem] py-[0.5rem] mx-auto text-black md:text-[20px] text-[22px] font-semibold font-cinzel rounded-full text-center bg-[#5CE1E6]'>Rules & Regulations</div>
                </div>
                <div>
                    {
                        rules.map((rule,index) => {
                            return (
                                <div className='flex justify-start items-start gap-[0.5rem] text-[1.1rem] sm:text-[1.5rem]'>
                                    <div className='text-white'>{index+1}.</div>
                                    <div className='text-white'>{rule}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default HostelAccomodation