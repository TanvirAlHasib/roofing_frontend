// import React from 'react'
import ThirdImage from "../../assets/about_us_third_section.avif"

export default function ThirdSection() {

  return (

    <>

        <main>

            <section className="w-[80%] mx-auto my-20">

                <div className="grid grid-cols-1 lg:grid-cols-2">

                    <img
                        src={ThirdImage}
                        alt="image"
                        className="w-[80%] object-cover"
                    />

                    <div className="py-10 sm:mx-6 sm:px-0 flex-1 flex flex-col gap-5 justify-center">

                        <h2 className="text-7xl text-gray-800 font-bold">We are on a mission.</h2>

                        <p className="text-[#5e5e54] text-lg font-normal">
                        We have been installing boilers and heating systems for over 10 years and we are proud to say we are experts in this field. We have a team of skilled & qualified members.
                        </p>

                        <div className="mt-8 flex flex-col gap-5">
                            <p className="text-[#5e5e54] text-lg font-normal"><strong className="text-lg text-gray-800"> <span className="text-teal-600">✔</span> Better Roofs: </strong> From free inspections, claim assistance, Roof replacements and home upgrades. </p>
                            <p className="text-[#5e5e54] text-lg font-normal"><strong className="text-lg text-gray-800"> <span className="text-teal-600">✔</span> Expert Engineers:</strong> Our experienced, knowledgeable team is here to guide you through every step of the process.</p>
                            <p className="text-[#5e5e54] text-lg font-normal"><strong className="text-lg text-gray-800"> <span className="text-teal-600">✔</span> Quality Materials: </strong> We understand the importance of protecting your family and investment, and we treat with care.</p>
                        </div>

                    </div>
                </div>

            </section>

        </main>

    </>

  )
}
