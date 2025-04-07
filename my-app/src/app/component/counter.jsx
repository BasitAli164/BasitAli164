"use client"
import { Minus, Plus } from 'lucide-react'
import  { useState } from 'react'


const Counter = () => {
    const [count,setCount]=useState(0)
    const decrement=()=>{
        if(count>0){
            setCount(count-1)
        }
    }
  return (
    <div className='w-72 h-72 bg-sky-400  flex justify-center items-center gap-10 rounded-xl shadow-xl hover:bg-emerald-500 transition-all'>
        <Minus className='w-12 h-12 rounded-full cursor-pointer bg-red-500 p-2  hover:bg-slate-300' onClick={decrement}/>
        <strong className='text-3xl'>{count}</strong>
        <Plus className='w-12 h-12 rounded-full cursor-pointer bg-red-500 p-2 hover:bg-slate-300' onClick={()=>{setCount(count+1)}}/>

      
    </div>
  )
}

export default Counter
