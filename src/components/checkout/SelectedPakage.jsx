/* eslint-disable react/no-unknown-property */
// import React from 'react'

import { useContext } from "react"
import { context } from "../../context/CartContext"

export default function SelectedPakage() {

    const {cart} = useContext(context)

    console.log(cart);

    // checking if there is any data in cart by measuring the length of cart object

    if (Object.keys(cart).length !== 0) {

        return (
    
            <>
                {/* <!--
                Heads up! 👋
        
                Plugins:
                    - @tailwindcss/forms
                --> */}
        
                <div className="mx-auto w-[60%] px-4 py-8 sm:px-6 sm:py-20 lg:px-8">
                    <div className="mx-auto">
                    <header className="text-center">
                        <h1 className="text-6xl text-gray-800 font-bold w-[75rem]">Your Cart 🛒</h1>
                    </header>
        
                    <div className="mt-16 border-t border-teal-200">
                        <ul className="space-y-4 pt-10">
                        <li className="flex items-center">
                            <div className="flex flex-col gap-1">
        
                                <h3 className="text-3xl text-gray-800 font-medium"> {cart.attributes.service_name} </h3>
        
                                <div className="mt-1">
                                    <dt className="inline">Price:</dt>
                                    <dd className="inline"> ${cart.attributes.price} </dd>
                                </div>
        
                                <div>
                                    <dt className="inline">Duration:</dt>
                                    <dd className="inline"> {cart.attributes.duration} </dd>
                                </div>
                            </div>
        
                            <div className="flex flex-1 items-center justify-end gap-2">
                            
                            <ul>
        
                                <dt className="inline text-lg border-b border-teal-200">features:</dt>
                                {/* making the feature text to array by spliting */}
        
                                {
                                    cart.attributes.features.split("\n").map(feature => (
        
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
        
                            </div>
                        </li>
                        </ul>
        
                        <div className="mt-8 flex justify-end border-t border-teal-200 pt-8">
                        <div className="w-screen max-w-lg space-y-4">
                            <dl className="space-y-0.5 text-gray-700">
                            <div className="flex justify-between">
                                <dt>Subtotal</dt>
                                <dd> ${cart.attributes.price} </dd>
                            </div>
        
                            <div className="flex justify-between">
                                <dt>VAT</dt>
                                <dd>${Math.ceil(cart.attributes.price*0.05)}</dd>
                            </div>
        
                            <div className="flex justify-between">
                                <dt>Discount</dt>
                                <dd>$0</dd>
                            </div>
        
                            <div className="flex justify-between !text-base font-medium">
                                <dt>Total</dt>
                                <dd> ${cart.attributes.price + Math.ceil(cart.attributes.price*0.05)} </dd>
                            </div>
                            </dl>
        
                            
                            <div className="flex justify-end">
                            <a
                                href="#"
                                className="block rounded bg-teal-600 px-5 py-3 text-lg text-white transition hover:bg-teal-700 mt-2"
                            >
                                Checkout
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </>
        
        )
        
    } else{

        return(

            <>
                <h1 className="text-7xl text-center my-20 font-semibold">ooppss....cart is empty ☹</h1>
            </>

        )

    }
}
