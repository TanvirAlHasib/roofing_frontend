/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import React from 'react'

export default function Blog({data, loading}) {

  // if (error) {

  //   return<>
  //     <h1 className="text-7xl text-center">something went wrong</h1>
  //   </>
    
  // }
  
  if (loading) {

    return <>
      <h1 className="text-7xl text-center">loading...</h1>
    </>
    
  } else {

    return (
      <div className="w-[80%] mx-auto flex flex-col items-center mt-20">
  
      <h1 className="text-7xl text-gray-800 font-bold">Our Blog</h1>
  
      <p className="mt-8 w-[45rem] text-center text-xl text-gray-700">We consider all the drivers of change gives you the blocks & components you need to change to create a truly professional website.</p>
  
        <div className="grid md:grid-cols-3 gap-16 justify-between items-center grid-cols-1 pt-20 pb-24">
  
          {data.map((singleData) => (
              <article key={singleData.id} className="overflow-hidden w-[28rem] rounded-lg shadow transition hover:shadow-lg">
              <img
                  alt=""
                  src={`http://localhost:1338${singleData.attributes.image.data[0].attributes.url}`}
                  className="h-56 w-full object-cover"
              />
  
              <div className="bg-white p-4 sm:p-6">
                  <time datetime="2022-10-10" className="block text-sm text-gray-500 font-medium"> {singleData.attributes.date} </time>
  
                  <a href="#">
                  <h3 className="mt-0.5 text-2xl text-gray-700 font-semibold line-clamp-1">{singleData.attributes.title}</h3>
                  </a>
  
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600">
                  description
                  </p>
              </div>
          </article>
          ))}
  
        </div>
      </div>
    )
    
  }
}