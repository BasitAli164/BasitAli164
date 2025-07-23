"use client"
import { useState } from "react"
import Footer from "./component/Footer"
import Header from "./component/Header"


const HomePage = () => {
  const [count,setCount]=useState(1)

  return (
  <div style={}>
 <Header/>
 <h1>Welcome to Home Page {count}</h1>
 <Footer/>
  </div>
  )
}

export default HomePage
