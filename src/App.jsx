// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Blog from "./components/Blog"
import Footer from "./components/Footer"
import Header from "./components/Header"
import useFetch from "./hook/useFetch"
import { Routes, Route } from "react-router-dom";



function App() {

  const [data, error, loading] = useFetch("https://jsonplaceholder.typicode.com/posts")
  console.log(data);

  return(
    <>
      <Header/>
      <Routes>
        <Route path="/blog" element={<Blog data= {data} loading={loading} error={error}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
