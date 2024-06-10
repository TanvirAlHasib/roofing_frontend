/* eslint-disable react/no-unknown-property */
// import React from 'react'
import { useContext } from "react"
import "../App.css"
import Logo from '../assets/logo.png'
import { Link, NavLink } from "react-router-dom"
import { context } from "../context/CartContext"

export default function Header() {

  const {cart} = useContext(context);

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
                <li>
                
                  {/* start here Rounded base sized cart logo --> */}

                  <NavLink
                    to={"/check_out"}
                    className="relative inline-flex items-center justify-center w-10 h-10 text-lg text-white rounded bg-[#0d9488]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                    {Object.keys(cart).length ? <span className="absolute -top-2.5 -right-2.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 px-1.5 text-sm text-white">
                      {Object.keys(cart).length - 1}
                      </span>: ""}

                  </NavLink>

                  {/* end here Rounded base sized cart logo --> */}

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