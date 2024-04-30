// import React from "react"
import { Link } from "react-router-dom"
import WhyChoose from "../assets/why_choose.jpg"
import FreeInspec from "../assets/freeInspec.svg"
import commercialRoofing from "../assets/commercialRoofing.svg"
import damageRepair from "../assets/damageRepair.svg"
import RoofingReplacement from "../assets/RoofingReplacement.svg"
import RoofRenovation from "../assets/RoofRenovation.svg"
import SolarPanel from "../assets/SolarPanel.svg"

export default function ReasonToChoose() {
  return (
    <>
      <div className="bg-[#f4f4eb] w-full">
          {/*<!-- Component: Horizontal card--> */}
        <div className="flex gap-14 justify-center overflow-hidden text-slate-500 sm:flex-row py-36 w-[80%] mx-auto">
          {/*  <!-- Image --> */}
          <figure className="flex-1">
            <img
              src={WhyChoose}
              alt="Why choose us"
              className="object-cover h-[38rem] w-[55rem] rounded-xl"
              // I have to start work form here
            />
          </figure>
          {/*  <!-- Body--> */}
          <div className="py-10 sm:mx-6 sm:px-0 flex-1 flex flex-col gap-8">

          <h2 className="text-7xl text-gray-800 font-bold">Reasons to choose our roofing services.</h2>

          <p className="text-[#5e5e54] text-lg font-normal">
          We have been installing boilers and heating systems for over 10 years and we are proud to say we are experts in this field. We have a team of skilled & qualified members.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            <p className="text-[#5e5e54] text-lg font-normal"><strong className="text-lg text-gray-800"> <span className="text-teal-600">✔</span> Affordable Prices:</strong> From free inspections, claim assistance, Roof replacements and home upgrades. </p>
            <p className="text-[#5e5e54] text-lg font-normal"><strong className="text-lg text-gray-800"> <span className="text-teal-600">✔</span> Expert Engineers:</strong> Our experienced, knowledgeable team is here to guide you through every step of the process.</p>
            <p className="text-[#5e5e54] text-lg font-normal"><strong className="text-lg text-gray-800"> <span className="text-teal-600">✔</span> Quality Materials: </strong> We understand the importance of protecting your family and investment, and we treat with care.</p>
          </div>
            
          </div>
        </div>
        {/*<!-- End Horizontal card--> */}

        {/* second part start here */}


        <div className="flex gap-20 justify-center overflow-hidden text-slate-500 sm:flex-row pb-36 w-[80%] mx-auto">

          <div className="flex-1 flex flex-col gap-8 py-10">

            <h1 className="text-7xl text-gray-800 font-bold">Professional and quality roofing services.</h1>

            <p className="text-[#5e5e54] text-lg font-normal">Our company provides all types of roof repairs, both residential and commercial, regardless of the damage level. We also offer partial tile replacement.</p>

            <Link
              className="rounded-md w-72 bg-teal-600 px-6 py-3.5 font-medium text-xl tracking-normal text-white shadow transition-all ease-linear duration-300 hover:border hover:border-gray-800 hover:bg-white hover:text-black mt-5"
              to={"/appoinment"}
              >
              Book A Free Consultation
            </Link>

          </div>

          <div className="flex-1">

            <div className="grid grid-cols-2 gap-10">

              <Link to={"/"} className="block">
                <img
                  alt="FreeInspec"
                  src={FreeInspec}
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Free Inspection</h3>

                <p className="mt-2 max-w-sm text-gray-700">
                Our team is experienced in handling everything repairs.
                </p>
              </Link>

              <Link to={"/"} className="block">
                <img
                  alt="commercialRoofing"
                  src={commercialRoofing}
                  
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Commercial Roofing</h3>

                <p className="mt-2 max-w-sm text-gray-700">
                Our team is experienced in handling everything repairs.
                </p>
              </Link>

              <Link to={"/"} className="block">
                <img
                  alt="RoofingReplacement"
                  src={RoofingReplacement}
                  
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Roof Replacement</h3>

                <p className="mt-2 max-w-sm text-gray-700">
                Our team is experienced in handling everything repairs.
                </p>
              </Link>

              <Link to={"/"} className="block">
                <img
                  alt="SolarPanel"
                  src={SolarPanel}
                  
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Solar Panels</h3>

                <p className="mt-2 max-w-sm text-gray-700">
                Our team is experienced in handling everything repairs.
                </p>
              </Link>

              <Link to={"/"} className="block">
                <img
                  alt="damageRepair"
                  src={damageRepair}
                  
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Damage Repairs</h3>

                <p className="mt-2 max-w-sm text-gray-700">
                Our team is experienced in handling everything repairs.
                </p>
              </Link>


              <Link to={"/"} className="block">
                <img
                  alt="RoofRenovation"
                  src={RoofRenovation}
                  
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Roof Renovation</h3>

                <p className="mt-2 max-w-sm text-gray-700">
                Our team is experienced in handling everything repairs.
                </p>
              </Link>
              
            </div>

          </div>

        </div>


        {/* second part end here */}

      </div>
    </>
  )
}

