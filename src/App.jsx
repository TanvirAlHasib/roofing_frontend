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



function App() {

  const [data, error, loading] = useFetch(`${import.meta.env.VITE_APP_API_URL}/api/blogs?populate=*`)
  console.log(data);

  return(
    <>
      <Header/>
      <Routes>
        <Route path="/blog" element={<Blog data= {data} loading={loading} error={error}/>}/>
        <Route path="/" element= {<Home/>}/>
        <Route path="/blog/:id" element={<SingleBlog/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App