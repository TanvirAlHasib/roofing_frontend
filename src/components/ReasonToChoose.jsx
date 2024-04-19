// import React from "react"
import WhyChoose from "../assets/why_choose.jpg"

export default function ReasonToChoose() {
  return (
    <>
      <div className="bg-[#f4f4eb] w-full">
        {/*<!-- Component: Horizontal card--> */}
      <div className="flex gap-14 justify-center overflow-hidden rounded text-slate-500 sm:flex-row py-36 w-[80%] mx-auto">
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
      </div>
    </>
  )
}

