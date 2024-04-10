/* eslint-disable react/no-unknown-property */
// import React from 'react'

export default function Blog() {
  return (
    <div className="w-[90%] mx-auto flex flex-col items-center mt-20">

    <h1 className="text-7xl text-gray-800 font-bold">Our Blog</h1>

    <p className="mt-8 w-[45rem] text-center text-xl text-gray-700">We consider all the drivers of change gives you the blocks & components you need to change to create a truly professional website.</p>

      <div className="grid md:grid-cols-3 gap-16 justify-between items-center grid-cols-1 pt-20 pb-24">

        {[...Array(6)].map((ind) => (
            <article key={ind} className="overflow-hidden w-[28rem] rounded-lg shadow transition hover:shadow-lg">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
                <time datetime="2022-10-10" className="block text-sm text-gray-500 font-medium"> 10th Oct 2022 </time>

                <a href="#">
                <h3 className="mt-0.5 text-2xl text-gray-700 font-semibold">How to position your furniture for positivity</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                dignissimos. Molestias explicabo corporis voluptatem?
                </p>
            </div>
        </article>
        ))}

      </div>
    </div>
  )
}
