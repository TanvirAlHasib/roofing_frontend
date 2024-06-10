/* eslint-disable react/no-unknown-property */
// import React from 'react'

import { Link } from "react-router-dom"
import useFetch from "../hook/useFetch"

export default function HomeBlogSection() {
    
    const [data] = useFetch(`${import.meta.env.VITE_APP_API_URL}/api/blogs?populate=*`)

  return (
    <section className="w-full py-32">

        <div className="w-[80%] mx-auto">

            <div className="flex flex-col gap-4 justify-center items-center mb-20">

                <h2 className="text-7xl text-gray-900 font-semibold">Our latest news</h2>

                <p className="text-center text-[#5e5e54] text-lg">Our customers are at the heart of our company, and with over 20 years of <br/> experience in the industry we understand every articles in details.</p>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {
                    data.slice(0,3).map(data => (
                        <article key={data.id} className="overflow-hidden w-[28rem] rounded-lg shadow transition hover:shadow-lg">
                            <img
                                alt=""
                                src={`${import.meta.env.VITE_APP_API_URL}${data.attributes.image.data[0].attributes.url}`}
                                className="h-56 w-full object-cover"
                            />
                
                            <div className="bg-white p-4 sm:p-6">
                                <time datetime="2022-10-10" className="block text-sm text-gray-500 font-medium mb-3"> {data.attributes.date} </time>
                
                                <Link to={`/blog/${data.id}`}>
                                    <h3 className="mt-0.5 text-2xl text-gray-700 font-semibold line-clamp-1">{data.attributes.title}</h3>
                                </Link>
                
                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600">
                                    {data.attributes.short_des}
                                </p>
                            </div>
                        </article>

                    ))
                }
            </div>

        </div>

    </section>
  )
}
