/* eslint-disable react/no-unknown-property */
// import React from 'react'
import "../App.css"
import Logo from '../assets/logo.png'
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-gray-100 py-5">
      <div className="mx-auto w-[80%] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <NavLink className="block text-teal-600" to={"/"}>

            <img src={Logo}
              className="h-16 w-16 rounded-full"
            />

            </NavLink>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-9 text-sm">
                <li>
                  <NavLink className="text-black transition hover:text-gray-500 tracking-wider font-normal text-lg" to={"/"}> Home </NavLink>
                </li>

                <li>
                  <NavLink className="text-black transition hover:text-gray-500 font-normal tracking-wider text-lg" to={"/about"}> About </NavLink>
                </li>

                <li>
                  <NavLink className="text-black transition hover:text-gray-500 font-normal tracking-wider text-lg" to={"/services"}> Services </NavLink>
                </li>

                <li>
                  <NavLink className="text-black transition hover:text-gray-500 font-normal tracking-wider text-lg" to={"/appoinment"}> Appoinment </NavLink>
                </li>

                <li>
                  <NavLink className="text-black transition hover:text-gray-500 font-normal tracking-wider text-lg" to={"/contact"}> Contact </NavLink>
                </li>

                <li>
                  <NavLink className="text-black transition hover:text-gray-500 font-normal tracking-wider text-lg" to={"/blog"}> Blog </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-teal-600 px-5 py-2.5 font-medium text-lg tracking-wide text-white shadow transition-all ease-linear duration-300 hover:border hover:border-gray-800 hover:bg-white hover:text-black"
                to={"/appoinment"}
              >
                Book A Free Consultation
              </Link>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}