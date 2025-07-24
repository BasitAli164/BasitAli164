import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center gap-10'>
        <h1 className='text-4xl text-green-800 font-bold'>About Page</h1>
        <div className='    '>
            <Link className='px-10 py-4 rounded-lg bg-red-600 font-bold text-xl text-white' href={"/"}>Home</Link>
        </div>
      
    </div>
  )
}

export default About
