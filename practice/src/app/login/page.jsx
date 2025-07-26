"use client"
import { useEffect, useState } from 'react'

export default async function Login() {
    const [userName,setUserName]=useState("")
    const [email,setEmail]=useState("")

    useEffect(async ()=>{
        try {
            const res=await fetch("/api/login")
            console.log(res.data)
           
        } catch (error) {
            
        }

    },[])

  return (
    <div>
      
    </div>
  )
}
