"use client"
import { useState } from "react"
import Footer from "./component/Footer"
import Header from "./component/Header"


const HomePage = () => {
  const [count,setCount]=useState(1)

  return (
  <div style={{width:"100%",height:"100vh", display:"flex" ,flexDirection:"column",justifyContent:"center" ,alignItems:"center"}}>
 <Header/>
 <h1>Welcome to Home Page {count}</h1>
 <Footer/>
  </div>
  )
}

export default HomePage
