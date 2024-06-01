// import React from 'react'

import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function SingleBlog() {

    const {id} = useParams()

    const [data, error, loading] = useFetch(`${import.meta.env.VITE_APP_API_URL}/api/blogs/${id}?populate=*`);

    // console.log(data);

    if (error) {

      return(
        <>
          <h1 className="text-7xl text-center my-20 font-semibold text-red-900">something went wrong</h1>
        </>
      )
      
    }

    if (loading) {

      return <>
        <h1 className="text-7xl text-center">loading...</h1>
      </>
      
    }

    if (data) {

      return(

        <>
          <div className="w-[80%] mx-auto my-20 flex flex-col gap-10 justify-center items-center">

            <h1 className="text-7xl text-gray-800 font-bold text-center w-[75rem]">{data.attributes.title}</h1>

            <p className="text-xl text-gray-600"> Date: {data.attributes.date} </p>

            <img
              alt="Image"
              src={`${import.meta.env.VITE_APP_API_URL}${data.attributes.image.data[0].attributes.url}`}
              className="w-[65%] h-[33rem] object-cover"
            />

            {/* for getting rich text style from starpi backend we need to install typography plugin of tailwindcss and to use we need call the class prose */}
            <article className="prose md:prose-xl mt-7">

              {/* for strapi rich text rendering we need this component */}
              <BlocksRenderer content={data.attributes.description} />

            </article>

          </div>

        </>

      )
      
    }
  
}
