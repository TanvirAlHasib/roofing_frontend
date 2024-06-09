/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */
// import React from 'react'

import { useContext, useState } from "react"
import { context } from "../../context/CartContext"
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function SelectedPakage() {


    // getting cart data by context api
    const {cart} = useContext(context);


    // checking if there is any data in cart by measuring the length of cart object

    if (Object.keys(cart).length !== 0) {

        // for showing the card details if user select the card option
        const [radioValue, setRadioValue] = useState("PaymentLater");

        const getRadioValue = (e) => {

            setRadioValue(e.target.value);

        }

        // saving empty object key to render after submit data
        const [afterSubmit, setAfterSubmit] = useState({
            name: "",
            email: "",
            phone: "",
            card_holder: "",
            expairy_date: "",
            card_number: "",
            cvc: "",
            city: "",
            home_town: "",
            zip_code: "",
            order_notes: "",
            PaymentOption: "PaymentLater",
            total_price: cart.attributes.price + Math.ceil(cart.attributes.price*0.05),
            package_name: cart.attributes.service_name,
            duration: cart.attributes.duration,
        })

        
        // getting users information and selected package information from form and sending data to the backend
        const [userData, setUserData] = useState({
            name: "",
            email: "",
            phone: "",
            card_holder: "",
            expairy_date: "",
            card_number: "",
            cvc: "",
            city: "",
            home_town: "",
            zip_code: "",
            order_notes: "",
            PaymentOption: "PaymentLater",
            total_price: cart.attributes.price + Math.ceil(cart.attributes.price*0.05),
            package_name: cart.attributes.service_name,
            duration: cart.attributes.duration,
        })
        const getUserInformation = (e) => {

            setUserData( (prev) => (
                {
                    ...prev,
                    [e.target.name]: e.target.value,
                    PaymentOption: radioValue
                }
            ) )

            setAfterSubmit( (prev) => (
                {
                    ...prev,
                    [e.target.name]: e.target.value,
                    PaymentOption: radioValue
                }
            ) )

        }

        console.log("after submit:",afterSubmit);

        // to delete empty keys of the object to resolve bad request problem
        Object.keys(userData).forEach(key => {
            if (!userData[key]) delete userData[key];
        })

        console.table(userData);

        // sending data to the database
        const sendData = (e) => {

            e.preventDefault();


            // using axios to submit data
            axios.post(`${import.meta.env.VITE_APP_API_URL}/api/orders`,

                {
                    // this data format is espesific for strapi post method, according to their docs. evrything is same we just have to wrap our data to a data object. that's it.
                    data: {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone,
                    card_holder: userData.card_holder,
                    expairy_date: userData.expairy_date,
                    card_number: userData.card_number,
                    cvc: userData.cvc,
                    city: userData.city,
                    home_town: userData.home_town,
                    zip_code: userData.zip_code,
                    order_notes: userData.order_notes,
                    PaymentOption: userData.PaymentOption,
                    total_price: cart.attributes.price + Math.ceil(cart.attributes.price*0.05),
                    package_name: cart.attributes.service_name,
                    duration: cart.attributes.duration,

                }},
                {

                headers: {
                    // telling them which will use to sumbit data and that is json
                    'Content-Type': 'application/json',
                    Authorization: `bearer ${import.meta.env.VITE_APP_API_TOKEN}`
                },    


            }

            ).then((response) => {

                if (response.status === 200) {

                    // making the input field empty after submitting the data
                    // we have to both makes clear otherwise previous data will enter the database
                    setUserData(
                        {
                            name: "",
                            email: "",
                            phone: "",
                            card_holder: "",
                            expairy_date: "",
                            card_number: "",
                            cvc: "",
                            city: "",
                            home_town: "",
                            zip_code: "",
                            order_notes: "",
                            PaymentOption: "PaymentLater",
                        }
                    )

                    // we have to both makes clear otherwise previous data will enter the database

                    setAfterSubmit(
                        {
                            name: "",
                            email: "",
                            phone: "",
                            card_holder: "",
                            expairy_date: "",
                            card_number: "",
                            cvc: "",
                            city: "",
                            home_town: "",
                            zip_code: "",
                            order_notes: "",
                            PaymentOption: "PaymentLater",
                        }
                    )

                    toast.success("Successfully submitted!");

                    // console.log(response);
                    
                }

            }).catch((error) => {

                console.log(error);

                toast.error("Something went wrong ☹");

            })

        }

        return (
    
            <>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    gutter={8}
                    containerClassName=""
                    containerStyle={{}}
                    toastOptions={{
                        // Define default options
                        className: '',
                        duration: 5000,
                        style: {
                        background: '#363636',
                        color: '#fff',
                        },

                        // Default options for specific types
                        success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                        },
                    }}
                />

                {/* toaster component end here */}

                {/* <!--
                Heads up! 👋
        
                Plugins:
                    - @tailwindcss/forms
                --> */}

                {/* toaster component start here */}
        
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
                        {
                            radioValue === "Card" ? <form action="#" className="space-y-4" onSubmit={sendData}>
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={afterSubmit.name}
                                    required
                                    onChange={getUserInformation}
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
                                    value={afterSubmit.email}
                                    onChange={getUserInformation}
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
                                    value={afterSubmit.phone}
                                    required
                                    onChange={getUserInformation}
                                />
                                </div>
                            </div>

                            <div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                    <label className="sr-only" htmlFor="email">Card holder</label>
                                    <input
                                        className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                        placeholder="Card Holder"
                                        type="text"
                                        id="card_holder"
                                        name="card_holder"
                                        value={afterSubmit.card_holder}
                                        required
                                        onChange={getUserInformation}
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
                                            value={afterSubmit.expairy_date}
                                            required
                                            onChange={getUserInformation}
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
                                        value={afterSubmit.card_number}
                                        required
                                        onChange={getUserInformation}
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
                                            value={afterSubmit.cvc}
                                            required
                                            onChange={getUserInformation}
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
                                        value={afterSubmit.city}
                                        onChange={getUserInformation}
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
                                            value={afterSubmit.home_town}
                                            onChange={getUserInformation}
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
                                            value={afterSubmit.zip_code}
                                            onChange={getUserInformation}
                                        />
                                    </div>
                                </div>
                            </div> 
                  
                            <div>
                                <label className="sr-only" htmlFor="message">Order notes</label>

                                <textarea
                                    className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                    placeholder="Order notes"
                                    rows="8"
                                    id="order_notes"
                                    name="order_notes"
                                    value={afterSubmit.order_notes}
                                    onChange={getUserInformation}
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
                        </form> : <form action="#" className="space-y-4" onSubmit={sendData}>
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={afterSubmit.name}
                                    required
                                    onChange={getUserInformation}
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
                                    value={afterSubmit.email}
                                    onChange={getUserInformation}
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
                                    value={afterSubmit.phone}
                                    required
                                    onChange={getUserInformation}
                                />
                                </div>
                            </div>


                            <div>
                                <label className="sr-only" htmlFor="message">Order notes</label>

                                <textarea
                                    className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                    placeholder="Order notes"
                                    rows="8"
                                    id="order_notes"
                                    name="order_notes"
                                    value={afterSubmit.order_notes}
                                    onChange={getUserInformation}
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
                        }
                    </div>

                    </div>

                </div>
                {/* user order data receiving section end */}

            </>
        
        )
        
    } else{

        return(

            <>
                <h1 className="text-7xl text-center my-20 font-semibold h-[30vh] flex flex-col items-center justify-center">ooppss....cart is empty ☹</h1>
            </>

        )

    }
}
