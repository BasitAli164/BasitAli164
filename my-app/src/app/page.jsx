"use client"
import { useState } from "react"
import Footer from "./component/Footer"
import Header from "./component/Header"


const HomePage = () => {
  const [count,setCount]=useState(1)

  return (
  <div className="w-full h-screen flex flex-col justify-center items-center gap-5 text-white">
 <Header/>
 <h1>Welcome to Home Page {count}</h1>
 <Footer/>
  </div>
  )
}

export default HomePage
