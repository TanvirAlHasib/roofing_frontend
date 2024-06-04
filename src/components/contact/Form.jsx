// import React from 'react'

import axios from "axios"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

export default function Form() {

    const [formData, setFromData] = useState(
        {
            name: "",
            phone: "",
            email: "",
            message: "",
        }
    )

    // creating function for getting the value of user's input
    const onChangeHandler = (e) => {

        setFromData(prev => (
            // modifying object
            {
                // keeping previous value by spread oparetor
                ...prev,
                // getting the name value by e.target.name and searching in object to get same name to store the user's input value
                [e.target.name]: e.target.value
            }
        ))

    }

    // console.log(formData);

    // the function will send the data to the database by onSubmit method 
    const sendDataToDatabase = (e) => {

        e.preventDefault();

        // using axios to submit data
        axios.post(`${import.meta.env.VITE_APP_API_URL}/api/contacts`,

            {
                // this data format is espesific for strapi post method, according to their docs. evrything is same we just have to wrap our data to a data object. that's it.
                data: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,

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
                setFromData(
                    {
                        name: "",
                        phone: "",
                        email: "",
                        message: "",
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

        {/* toaster component start here */}

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

        {/*
            Heads up! 👋

            Plugins:
            - @tailwindcss/forms
        */}

        <sectio>
            <div className="px-4 sm:px-6 lg:px-8">

                <div className="rounded-lg bg-gray-100 p-8 shadow-lg lg:col-span-3 lg:p-12">
                {/* calling the sendDataToDatabase function in onSubmit method to submit data to the database */}
                    <form action="#" onSubmit={sendDataToDatabase} className="space-y-4">
                        <div>
                            <label className="sr-only" htmlFor="name">Name</label>
                            <input
                            className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                            placeholder="Name"
                            type="text"
                            id="name"
                            name="name"
                            // showing the same value that user inputting in the input field as default
                            value={formData.name}
                            // using onChange method to run the function
                            onChange={onChangeHandler}
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
                                // showing the same value that user inputting in the input field as default
                                value={formData.email}
                                // using onChange method to run the function
                                onChange={onChangeHandler}
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
                                // showing the same value that user inputting in the input field as default
                                value={formData.phone}
                                // using onChange method to run the function
                                onChange={onChangeHandler}
                            />
                            </div>
                        </div>

                        <div>
                            <label className="sr-only" htmlFor="message">Message</label>

                            <textarea
                                className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                placeholder="Message"
                                rows="8"
                                id="message"
                                name="message"
                                // showing the same value that user inputting in the input field as default
                                value={formData.message}
                                // using onChange method to run the function
                                onChange={onChangeHandler}
                            ></textarea>
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg bg-teal-600 hover:bg-teal-800 px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Send Enquiry
                            </button>

                        </div>
                    </form>
                </div>
                
            </div>
        </sectio>
    </>

  )
}
