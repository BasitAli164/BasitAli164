'use client'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [comment,setComment]=useState([])
    // const [loading,setLoading]=useState(false)

    useEffect(()=>{
        const fetchComments=async()=>{
            try {
                const response= await fetch("https://jsonplaceholder.typicode.com/comments")
                const data=await response.json()
                // setLoading(true)
                setComment(data)
                console.log(data)
                
            } catch (error) {
                console.log("Error is comment page:",error)
                
            }

        }
                fetchComments()

        // return ()=>{
        //     setLoading(false)
        // }
    },[])

    if(!comment) return <div>There is no Comment</div>
    // if(loading) return <h1>Loading....</h1>
  return (
    <div>
        {
            comment.map(item=><div id={item.id}>
                    <h1>{item.email}</h1>
                </div>)
        }
      
    </div>
  )
}
