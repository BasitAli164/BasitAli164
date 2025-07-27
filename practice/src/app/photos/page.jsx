'use client'
import React, { useEffect, useState } from 'react'

export default function Phots() {

    const [photo,setPhoto]=useState([])
    const [loading,setLoading]=useState(false)


    useEffect(()=>{
        const fetchPhotos=async()=>{
            setLoading(true)
            try {
                const res=await fetch('https://jsonplaceholder.typicode.com/photos')
                const data=await res.json()
                setPhoto(data)
                console.log("data is:",data)
                
            } catch (error) {
                console.log(typeof error)



                
            }finally{
                setLoading(false)
            }
        }
    },[])

    if(loading) return <h1>loading..</h1>
  return (
    <div>
      
    </div>
  )
}
