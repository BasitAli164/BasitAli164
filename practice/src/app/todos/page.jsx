'use client'
import React, { useEffect, useState } from 'react'

export default function Todo() {
    const [todo,setTodo]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false)


    useEffect(()=>{
        setLoading(true)
        setError(null)
       const fetchTodos=async ()=>{
         try {
            const response=await fetch("https://jsonplaceholder.typicode.com/todos")
            const data= await response.json()
            setTodo(data)
            console.log("data is:",data)
            
            
        } catch (error) {
            setError(error.message)
            
        }finally{
            setLoading(false)
        }
       }
       fetchTodos()

    },[])
    if(loading) return <p className='text-5xl text-white'>Loading....</p>
    if(error===false) return <p>Error: {error}</p>
  return (
    <div>
        {
            todo.map((item)=>(
                <div key={item.id}>
                    <p>Todo No: {item.id}</p>
                    <p>Title: {item.title}</p>
                    <p>Complete Status: {item.complete}</p>
                </div>
            ))
        }
      
    </div>
  )
}
