/* eslint-disable react/no-unknown-property */
// import React from 'react'
import { Link } from 'react-router-dom'
import HeroBackground from '../assets/hero_background-removebg-preview.png'

export default function Hero() {
  return (
    <div className="w-[100%] h-screen flex flex-col items-center relative bg-gradient-to-l from-[#d4d3c6] to-[#9fa49b] overflow-hidden">

        <img
            alt=""
            src={HeroBackground}
            className="absolute inset-0 h-min w-full object-cover left-[32rem] -top-14"
        />

        <div className='z-10 flex flex-col gap-9 w-[77%] h-full items-start justify-center'>

            <h1 className='text-[7.5rem] font-bold text-gray-50 tracking-normal leading-[8rem] w-[55rem]'>Roofing Service in West London.</h1>

            <p className='text-white text-xl w-[50rem]'>From handling insurance communications to coordinating with trusted and vetted contractors are taken care of.</p>

            <div className='flex gap-7'>

                <Link
                    className="rounded-md bg-teal-600 px-6 py-3.5 font-medium text-xl tracking-normal text-white shadow transition-all ease-linear duration-300 hover:border hover:border-gray-800 hover:bg-white hover:text-black"
                    to={"/appoinment"}
                >
                    Book A Free Consultation
                </Link>

                <Link
                    className="rounded-md hover:bg-teal-600 px-6 py-3.5 font-medium text-xl tracking-normal hover:text-white shadow transition-all ease-linear duration-300 hover:border hover:border-gray-800 bg-gray-100 text-black"
                    to={"/services"}
                >
                    Explore Our Services
                </Link>

            </div>

            <div className='flex gap-10 mt-6'>

                {/* <!-- Component: Rounded full base sized basic grouped avatars --> */}
                <div className="flex items-center justify-center">
                    <div className="flex -space-x-2">
                        <button className="relative inline-flex items-center justify-center w-14 h-14 text-white rounded-full">
                        <img src="https://i.pravatar.cc/40?img=31" alt="user name" title="user name" width="56" height="56" className="max-w-full border-2 border-white rounded-full" />
                        </button>
                        
                        <button className="relative inline-flex items-center justify-center w-14 h-14 text-white rounded-full">
                        <img src="https://i.pravatar.cc/40?img=33" alt="user name" title="user name" width="56" height="56" className="max-w-full border-2 border-white rounded-full" />
                        </button>
                        <button className="relative inline-flex items-center justify-center w-14 h-14 text-lg text-white rounded-full bg-emerald-500">
                        <img src="https://framerusercontent.com/images/g5Wkr2KAbRVpUTnDbroYz6JKYw.svg" alt="user name" title="user name" width="56" height="56" className="max-w-full border-2 border-white rounded-full" />
                        </button>
                        <button className="relative inline-flex items-center justify-center w-14 h-14 text-white rounded-full">
                        <img src="https://i.pravatar.cc/40?img=34" alt="user name" title="user name" width="56" height="56" className="max-w-full border-2 border-white rounded-full" />
                        </button>
                    </div>
                </div>
                {/* <!-- End Rounded full base sized basic grouped avatars --> */}

                <div className='flex flex-col gap-1'>

                    <h3 className='text-5xl text-gray-50 font-bold'>1550+</h3>

                    <p className='text-gray-50'>Satisfied Customers</p>

                </div>

            </div>
        </div>

    </div>
  )
}
