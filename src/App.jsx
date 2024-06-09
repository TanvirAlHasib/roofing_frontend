// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Blog from "./components/Blog"
import Footer from "./components/Footer"
import Header from "./components/Header"
import useFetch from "./hook/useFetch"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import CartContext from "./context/CartContext";
import AboutUs from "./pages/AboutUs";
import Appoinment from "./pages/Appoinment";



function App() {

  const [data, error, loading] = useFetch(`${import.meta.env.VITE_APP_API_URL}/api/blogs?populate=*`)
  // console.log(data);

  return(
    <>
      <CartContext>
      <Header/>
      <Routes>
        <Route path="/blog" element= {<Blog data= {data} loading={loading} error={error}/>}/>
        <Route path="/" element= {<Home/>}/>
        <Route path="/blog/:id" element= {<SingleBlog/>}/>
        <Route path="/services" element= {<Services/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/check_out" element = {<Checkout/>}/>
        <Route path="/about" element = {<AboutUs/>}/>
        <Route path="/appoinment" element = {<Appoinment/>}/>
      </Routes>
      <Footer/>
      </CartContext>
    </>
  )
}

export default App