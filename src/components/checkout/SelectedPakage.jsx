/* eslint-disable react/no-unknown-property */
// import React from 'react'

import { useContext, useState } from "react"
import { context } from "../../context/CartContext"

export default function SelectedPakage() {

    // for showing the card details if user select the card option
    const [radioValue, setRadioValue] = useState("");

    const getRadioValue = (e) => {

        setRadioValue(e.target.value);

    }

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
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* user order data receiving section start here */}
                <div className="w-[60%] mx-auto mb-20">

                    <fieldset className="space-y-4 w-[50%] pl-9 mb-4">

                        <div>
                            <label
                            htmlFor="PaymentLater"
                            className="flex cursor-pointer justify-between gap-4 rounded-lg border border-teal-200 bg-white p-4 text-sm font-medium shadow-sm hover: has-[:checked]:border-teal-500 has-[:checked]:ring-1 has-[:checked]:ring-teal-500 accent-teal-600"
                            >
                            <div>
                                <p className="text-gray-700">Payment Later</p>
                            </div>

                            <input
                                type="radio"
                                name="PaymentOption"
                                value="PaymentLater"
                                id="PaymentLater"
                                className="size-5 border-teal-300 text-teal-500"
                                checked
                                onClick={getRadioValue}
                            />
                            </label>
                        </div>

                        <div>
                            <label
                            htmlFor="Card"
                            className="flex cursor-pointer justify-between gap-4 rounded-lg border border-teal-200 bg-white p-4 text-sm font-medium shadow-sm hover:border-teal-200has-[:checked]:border-teal-500 has-[:checked]:ring-1 has-[:checked]:ring-teal-500 accent-teal-600"
                            >
                            <div>
                                <p className="text-gray-700">Card</p>
                            </div>

                            <input
                                type="radio"
                                name="PaymentOption"
                                value="Card"
                                id="Card"
                                className="size-5 border-teal-300 text-teal-500"
                                onClick={getRadioValue}
                            />
                            </label>
                        </div>

                    </fieldset>

                    <div className="px-4 sm:px-6 lg:px-8">

                    <div className="rounded-lg bg-gray-100 p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="#" className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                placeholder="Name"
                                type="text"
                                id="name"
                                name="name"
                                required
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                <label className="sr-only" htmlFor="email">Email</label>
                                <input
                                    className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                    placeholder="Email address"
                                    type="email"
                                    id="email"
                                    name="email"
                                
                                />
                                </div>

                                <div>
                                <label className="sr-only" htmlFor="phone">Phone</label>
                                <input
                                    className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                    placeholder="Phone Number"
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    
                                />
                                </div>
                            </div>

                            {/* for card payment form input field start here */}
                            {
                                radioValue === "Card" ? <div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                    <label className="sr-only" htmlFor="email">Card holder</label>
                                    <input
                                        className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                        placeholder="Card Holder"
                                        type="text"
                                        id="card_holder"
                                        name="card_holder"
                                        required
                                    
                                    />
                                    </div>

                                    <div className="flex gap-3">
                                        <label className="sr-only" htmlFor="phone">Expairy date</label>
                                        <input
                                            className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                            placeholder="Month"
                                            type="date"
                                            id="expairy_date"
                                            name="expairy_date"
                                            required
                                            
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 py-3">
                                    <div>
                                    <label className="sr-only" htmlFor="email">Card number</label>
                                    <input
                                        className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                        placeholder="Card Number"
                                        type="number"
                                        id="card_number"
                                        name="card_number"
                                        required
                                    
                                    />
                                    </div>

                                    <div className="flex gap-3">
                                        <label className="sr-only" htmlFor="phone">CVC</label>
                                        <input
                                            className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                            placeholder="CVC"
                                            type="number"
                                            id="cvc"
                                            name="cvc"
                                            required
                                            
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    <div>
                                    <label className="sr-only" htmlFor="email">City</label>
                                    <input
                                        className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                        placeholder="City"
                                        type="text"
                                        id="city"
                                        name="city"
                                    
                                    />
                                    </div>

                                    <div className="flex gap-3">
                                        <label className="sr-only" htmlFor="phone">Home town</label>
                                        <input
                                            className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                            placeholder="Home town"
                                            type="text"
                                            id="home_town"
                                            name="home_town"
                                            
                                        />
                                    </div>

                                    <div className="flex gap-3">
                                        <label className="sr-only" htmlFor="phone">Zip code</label>
                                        <input
                                            className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                            placeholder="Zip code"
                                            type="number"
                                            id="zip_code"
                                            name="zip_code"
                                            
                                        />
                                    </div>
                                </div>
                            </div> : ""
                            }
                            {/* for card payment form input field end here */}


                            <div>
                                <label className="sr-only" htmlFor="message">Order notes</label>

                                <textarea
                                    className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                    placeholder="Order notes"
                                    rows="8"
                                    id="order_notes"
                                    name="order_notes"
                                    
                                ></textarea>
                            </div>

                            <div className="mt-4 flex justify-center">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-teal-600 hover:bg-teal-800 px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Place Order
                                </button>

                            </div>
                        </form>
                    </div>

                    </div>

                </div>
                {/* user order data receiving section end */}

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
