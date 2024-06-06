// import React from 'react'

import { Link } from "react-router-dom";
import useFetch from "../../hook/useFetch"
import { useContext } from "react";
import { context } from "../../context/CartContext";

export default function Pricing() {

    const [data, error, loading] = useFetch(`${import.meta.env.VITE_APP_API_URL}/api/services?populate=*`);

    const {setCart} = useContext(context);

    const updateCart = (data) => {

        setCart(data);

    }

    if (data) {

        return (

            <>
                <section>
        
                    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center md:gap-8">
                            {
                                data.map(data => (
                                    <div
                                        className="rounded-2xl border border-teal-200 p-6 shadow-sm ring-1 ring-teal-600 sm:order-last sm:px-8 lg:p-12" key={data.id}
                                    >
                                        <div className="text-center">
                                            <h2 className="text-lg font-medium text-gray-900">
                                            {data.attributes.service_name}
                                            <span className="sr-only">Plan</span>
                                            </h2>
                    
                                            <p className="mt-2 sm:mt-4">
                                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> {data.attributes.price}$ </strong>
                    
                                            <span className="text-sm font-medium text-gray-700">/month</span>
                                            </p>
                                        </div>
        
                                        <ul className="mt-6 space-y-2">
                                        {/* making the feature text to array by spliting */}

                                            {
                                                data.attributes.features.split("\n").map(feature => (

                                                    <li className="flex items-center gap-1 my-2" key={feature}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="size-5 text-teal-700 flex-shrink-0"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                        </svg>
                            
                                                        <span className="text-gray-700"> {feature} </span>
                                                    </li>

                                                ))
                                            }
            
                                        </ul>
                    
                                        <Link
                                            to={"/check_out"}
                                            className="mt-8 block rounded-full border border-teal-200 bg-teal-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-teal-700 hover:ring-1 hover:ring-teal-700 focus:outline-none focus:ring active:text-teal-500"
                                            onClick={() => updateCart(data)}
                                        >
                                            Get Started
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
        
                </section>
            </>
        
          )
        
    }

    if (error) {

        return(

            <>
                <h1 className="text-7xl text-center my-20 font-semibold text-red-900">something went wrong</h1>
            </>

        )
        
    }

    if (loading) {

        return(

            <>
                <h1 className="text-7xl text-center">loading...</h1>
            </>

        )
        
    }

}
