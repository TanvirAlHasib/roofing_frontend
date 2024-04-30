// import React from 'react'
import Experience from '../components/Experience'
import FAQ from '../components/FAQ'
import FreeConsultation from '../components/FreeConsultation'
import Hero from '../components/Hero'
import HomeBlogSection from '../components/HomeBlogSection'
import ReasonToChoose from '../components/ReasonToChoose'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
        <Hero/>
        <ReasonToChoose/>
        <Experience/>
        <FreeConsultation/>
        <Testimonials/>
        <HomeBlogSection/>
        <FAQ/>
    </>
  )
}
