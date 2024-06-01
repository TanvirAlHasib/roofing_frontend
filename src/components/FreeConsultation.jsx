// import React from 'react'
import { Link } from 'react-router-dom'
import FreeConsultationImage2 from '../assets/free_consultation_2.png'

export default function FreeConsultation() {
  return (
    <div className="w-full h-screen pb-36 overflow-hidden bg-gradient-to-l from-[#d4d3c6] to-[#9fa49b] relative">

        <img
            src={FreeConsultationImage2}
            alt='image'
            className='absolute w-full top-[29rem]'
        />

        <div className='w-[80%] mx-auto'>

            <div className='flex absolute top-48 items-end gap-64'>

                <div className='flex-1 flex flex-col gap-5'>

                    <h1 className='text-7xl text-white font-medium'>Are you ready to get your roofing service?</h1>

                    <p className='text-white text-xl'>Our company provides all types of roof repairs, both residential and commercial, regardless of the damage level. We also offer partial tile replacement.</p>

                </div>

                <div className="flex-1">
                    <Link
                        className="rounded-md bg-[#606057] px-8 py-6 font-medium text-2xl text-white shadow transition-all ease-linear duration-300 hover:border hover:border-gray-800 hover:bg-white hover:text-black"
                        to={"/appoinment"}
                    >
                        Book A Free Consultation
                    </Link>
                </div>

            </div>

        </div>

    </div>
  )
}
