"use client";
import {useEffect, useState} from 'react'
export default function page() {
    const [post,setPost]=useState([])

    useEffect(()=>{
       const fetchData=async ()=>{
        try {
            const res=await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            const data= await res.json()
            if(!res){
                return <h1>Does not Fetch</h1>
            }
            console.log("Res:",data)
            setPost(data)
            
        } catch (error) {
            console.log("Error is :",error)
            
        }
       }
       fetchData()
    },[])

  return (
    <div>
       {
        post.map((item)=>
            <div id={item.id}>
                <h1>Title of Post: {item.title}</h1>

            </div>
        )
       }
      
    </div>
  )
}
