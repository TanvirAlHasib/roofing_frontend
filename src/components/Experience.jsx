// import React from 'react'
import Experience_1 from '../assets/experience_1.webp'
import Experience_2 from '../assets/experience_2.webp'
import Experience_3 from '../assets/experience_3.webp'


export default function Experience() {
  return (
    <div className='w-full bg-white py-36'>

        <div className="w-[80%] mx-auto flex">

            <div className="flex-1 relative">

                <img 
                    src={Experience_1}
                    alt='image'
                    className='rounded-lg object-cover mb-7 ml-7'
                />

                <div className='flex gap-7'>

                    <img
                        src={Experience_2}
                        alt='image'
                        className='h-[28rem] rounded-lg w-[20rem] object-cover'
                    />

                    <img
                        src={Experience_3}
                        alt='image'
                        className='h-[20rem] w-[15rem] object-cover rounded-lg'
                    />

                </div>

                <div className='absolute top-[13rem] left-[10rem] bg-[#5f5f57] text-white border-[8px] border-teal-600 px-16 py-8 rounded-3xl text-center'>

                    <h1 className='font-bold text-[6.5rem] -mt-6'>25</h1>
                    <p className='font-medium text-2xl -mt-4'>Years of <br/> Expericence</p>

                </div>

            </div>

            <div className='flex-1'>

                <div className='flex flex-col gap-10'>

                    <h1 className='text-7xl text-gray-800 font-medium'>Taking care of the roof of your house.</h1>

                    <p className='text-[#5e5e54] text-xl'>Your building is your most important asset. Make sure it’s protected. Storm damage can be latent, causing problems that plague you for years to come and we may have a solution to save you.</p>

                    <div className='flex gap-7  mt-10'>

                        <h2 className='text-5xl text-white bg-[#5f5f57] h-20 w-20 text-center rounded-full pt-3 border-[4px] border-teal-600 font-medium'>1</h2>

                        <div className='flex flex-col gap-2'>

                            <h4 className='text-3xl text-[#5e5e54] font-medium'>Solutions</h4>

                            <p className='text-lg text-[#5e5e54]'>We’ll ensure that you focus on the opportunities that maximize competitive advantage.</p>

                        </div>

                    </div>

                    <div className='flex gap-7'>

                        <h2 className='text-5xl text-white bg-[#5f5f57] h-20 w-20 text-center rounded-full pt-3 border-[4px] border-teal-600 font-medium'>2</h2>

                        <div className='flex flex-col gap-2'>

                            <h4 className='text-3xl text-[#5e5e54] font-medium'>Commercial Services</h4>

                            <p className='text-lg text-[#5e5e54]'>We’ll ensure that you focus on the opportunities that maximize competitive advantage.</p>

                        </div>

                    </div>

                    <div className='flex gap-7'>

                        <h2 className='text-5xl text-white bg-[#5f5f57] h-20 w-20 text-center rounded-full pt-3 border-[4px] border-teal-600 font-medium'>3</h2>

                        <div className='flex flex-col gap-2'>

                            <h4 className='text-3xl text-[#5e5e54] font-medium'>Supervision</h4>

                            <p className='text-lg text-[#5e5e54]'>We’ll ensure that you focus on the opportunities that maximize competitive advantage.</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}
