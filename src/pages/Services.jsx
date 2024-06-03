// import React from 'react'

import Testimonials from "../components/Testimonials";
import Our_services from "../components/services/Our_services";
import Pricing from "../components/services/Pricing";

export default function Services() {

  return (

    <>
        <section>

            <div className="flex flex-col gap-14 items-center w-[80%] mx-auto my-20">

                <div className="flex flex-col items-center">

                    <h1 className="text-7xl text-gray-800 font-bold">Offering best roofing services</h1>
                    <p className="mt-8 w-[45rem] text-center text-xl text-gray-600">We consider all the drivers of change gives you the blocks & components you need to change to create a truly professional website.</p>

                </div>

                <Our_services/>

            </div>

            <Testimonials/>

            <div className="w-[80%] mx-auto my-20 flex flex-col gap-8 items-center">

                <div className="flex flex-col items-center">

                    <h1 className="text-7xl text-gray-800 font-bold">Our pricing plans</h1>
                    <p className="mt-8 w-[45rem] text-center text-xl text-gray-600">Roofing has an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five centuries.</p>

                </div>

                <Pricing/>

            </div>

        </section>
    </>

  )
}
