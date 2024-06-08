// import React from 'react'
import Facebook from '../../assets/facebook.svg'
import Twitter from '../../assets/twitter.svg'
import LinkedIn from '../../assets/linkedin.svg'
import Github from '../../assets/github.svg'

export default function LastSection() {

  return (

    <>

        <main className="w-full bg-[#f4f4eb]">

            <section className="w-[80%] mx-auto py-20">

                <div className="flex flex-col gap-5 items-center justify-center">

                    <h2 className="text-7xl text-gray-800 font-bold">We are on a mission.</h2>

                    <p className="text-[#5e5e54] text-lg font-normal text-center">
                    Our customers are at the heart of our company, and with over 20 years of <br/> experience in the industry we understand every articles in details.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-x-10 mt-14">

                        <article className="overflow-hidden rounded-lg border border-teal-100 bg-white shadow-md">
                            <img
                                alt=""
                                src="https://framerusercontent.com/images/rGtGNJRR76hQjjj8paHHzasq1Zg.png?scale-down-to=512"
                                className="h-56 w-full object-cover"
                            />

                            <div className="flex flex-col gap-3 items-center p-4 sm:p-6">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Tony Williamson
                                </h3>

                                <p className="line-clamp-3 text-sm/relaxed text-gray-500">
                                    Founder/Founding Partner
                                </p>

                                <div className="flex gap-5">

                                    <img
                                        src={Facebook}
                                        alt='image'
                                        className='w-6'
                                    />

                                    <img
                                        src={Twitter}
                                        alt='image'
                                        className='w-6'
                                    />

                                    <img
                                        src={LinkedIn}
                                        alt='image'
                                        className='w-6'
                                    />

                                    <img
                                        src={Github}
                                        alt='image'
                                        className='w-6'
                                    />

                                </div>

                            </div>
                        </article>

                        <article className="overflow-hidden rounded-lg border border-teal-100 bg-white shadow-md">
                            <img
                                alt=""
                                src="https://framerusercontent.com/images/n2PNgSZiJ0PmINm0unnYB0Z4eE.png?scale-down-to=512"
                                className="h-56 w-full object-cover"
                            />

                            <div className="flex flex-col gap-3 items-center p-4 sm:p-6">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Emily Haden
                                </h3>

                                <p className="line-clamp-3 text-sm/relaxed text-gray-500">
                                    Founder/Founding Partner
                                </p>

                                <div className="flex gap-5">

                                    <img
                                        src={Facebook}
                                        alt='image'
                                        className='w-6'
                                    />

                                    <img
                                        src={Twitter}
                                        alt='image'
                                        className='w-6'
                                    />

                                    <img
                                        src={LinkedIn}
                                        alt='image'
                                        className='w-6'
                                    />

                                    <img
                                        src={Github}
                                        alt='image'
                                        className='w-6'
                                    />

                                </div>

                            </div>
                        </article>

                        <article className="overflow-hidden rounded-lg border border-teal-100 bg-white shadow-md">
                            <img
                                alt=""
                                src="https://framerusercontent.com/images/BnOKDozoanOlAlMlJVhGwOPPfU.png?scale-down-to=512"
                                className="h-56 w-full object-cover"
                            />

                            <div className="flex flex-col gap-3 items-center p-4 sm:p-6">
                                <h3 className="text-xl font-semibold text-gray-900">
                                Mercedes Wallace
                                </h3>

                                <p className="line-clamp-3 text-sm/relaxed text-gray-500">
                                    Founder/Founding Partner
                                </p>

                                <div className="flex gap-5">

                                    <img
                                        src={Facebook}
                                        alt='image'
                                        className='w-6'
                                    />

                                    <img
                                        src={Twitter}
                                        alt='image'
                                        className='w-6'
                                    />

                                    <img
                                        src={LinkedIn}
                                        alt='image'
                                        className='w-6'
                                    />

                                    <img
                                        src={Github}
                                        alt='image'
                                        className='w-6'
                                    />

                                </div>

                            </div>
                        </article>

                        <article className="overflow-hidden rounded-lg border border-teal-100 bg-white shadow-md">
                            <img
                                alt=""
                                src="https://framerusercontent.com/images/Jjhh57Qo2OC7r73dz8SUXQ0Hs.png?scale-down-to=512"
                                className="h-56 w-full object-cover"
                            />

                            <div className="flex flex-col gap-3 items-center p-4 sm:p-6">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Tony Williamson
                                </h3>

                                <p className="line-clamp-3 text-sm/relaxed text-gray-500">
                                    Founder/Founding Partner
                                </p>

                                <div className="flex gap-5">

                                    <img
                                        src={Facebook}
                                        alt='image'
                                        className='w-6'
                                    />

                                    <img
                                        src={Twitter}
                                        alt='image'
                                        className='w-6'
                                    />

                                    <img
                                        src={LinkedIn}
                                        alt='image'
                                        className='w-6'
                                    />

                                    <img
                                        src={Github}
                                        alt='image'
                                        className='w-6'
                                    />

                                </div>

                            </div>
                        </article>

                    </div>

                </div>

            </section>

        </main>

    </>

  )
}
