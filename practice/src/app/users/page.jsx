'use client'
import React, { useEffect, useState } from 'react'

export default function User() {

    const [user,setuser]=useState([])
    const [loading,setLoading]=useState(false)


    useEffect(()=>{
        const fetchuser=async()=>{
            setLoading(true)
            try {
                const res=await fetch('https://jsonplaceholder.typicode.com/users')
                const data=await res.json()
                setuser(data)
                console.log("data is:",data)
                
            } catch (error) {
                console.log(typeof error)



                
            }finally{
                setLoading(false)
            }
        }
        fetchuser()
    },[])

    if(loading) return <p className='text-white text-5xl'>loading..</p>
  return (
    <div className='bg-amber-100 w-full  flex flex-col items-center gap-5 py-10'>
        <h2 className='text-5xl font-bold text-black'>User Detail are</h2>
       <div className='flex gap-5 flex-wrap justify-center items-center '>
         {
            user.map((item)=>(
                <div key={item.id} className='w-72 h-88 rounded-lg bg-sky-600 border-2 border-black border-solid  text-black p-5'>
                    <p>User_No: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Username: {item.username}</p>
                    <p>Phone: {item.phone}</p>
                    <p>Email: {item.email}</p>
                    <ul>
                        <li>Address:</li>
                        <li className='ml-10'>City: {item.address.city}</li>
                        <li className='ml-10'>City: {item.address.geo.lat}</li>
                    </ul>
                    <ul>
                        <li>Cpmpany: </li>
                        <li className='ml-10'>Name: {item.company.name}</li>
                        <li className='ml-10'>BS: {item.company.bs}</li>
                    </ul>
                </div>
            ))

        }
       </div>
      
    </div>
  )
}
