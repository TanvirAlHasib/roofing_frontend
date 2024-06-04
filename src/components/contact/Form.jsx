// import React from 'react'

export default function Form() {

  return (

    <>
        {/*
            Heads up! 👋

            Plugins:
            - @tailwindcss/forms
        */}

        <sectio>
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
                            />
                            </div>

                            <div>
                            <label className="sr-only" htmlFor="phone">Phone</label>
                            <input
                                className="w-full rounded-lg border border-teal-200 p-3 text-base focus:outline-teal-300"
                                placeholder="Phone Number"
                                type="tel"
                                id="phone"
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
                            ></textarea>
                        </div>

                        <div className="mt-4 flex justify-between">
                            <button
                            className="inline-block w-full rounded-lg bg-teal-600 hover:bg-teal-800 px-5 py-3 font-medium text-white sm:w-auto"
                            >
                            Book A Call
                            </button>

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
