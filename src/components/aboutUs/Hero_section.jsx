// import React from 'react'

import HeroImage from "../../assets/about_us_hero_section.avif";

export default function Hero_section() {

  return (

    <>
        <main className="w-[80%] mx-auto mt-20 mb-24">

            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-5">

                <div className="flex flex-col gap-5 lg:mt-20">

                    <h1 className="text-6xl text-gray-800 font-bold w-[75rem]">Roofer Story</h1>
                    <p className="text-gray-700 font-medium text-lg">We are extremely excited to be consecutively awarded 3 years on three bestrated.com as one of the top 3 best rated roofing contractors.</p>
                    <p className="text-gray-600">If you decide to make a claim through your insurance, we can assist to make the process as simple as possible. We can help with the initial valuation of the cost of repair and carry out the repair once approved.<br/> <br/>As a local business that cares about our community, we are dedicated to providing the best possible service and are incredible proud of our craft. If you decide to make a claim through your insurance, we can assist to make the process as simple as possible.</p>

                </div>

                <div className="relative flex justify-center items-center lg:justify-end">

                    <img

                        src={HeroImage}
                        alt="image"
                        className="w-[100%] lg:w-[80%] object-cover h-[28rem] lg:h-[35rem]"

                    />

                    <div className='absolute top-[25rem] left-[4rem] bg-[#5f5f57] text-white border-[4px] border-teal-600 px-10 py-8 rounded-3xl text-center'>

                        <h1 className='font-bold text-[4.5rem] -mt-6'>25</h1>
                        <p className='font-medium text-xl -mt-4'>Years of <br/> Expericence</p>

                    </div>

                </div>

            </section>


        </main>
    </>

  )
}
