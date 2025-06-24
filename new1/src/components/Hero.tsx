import React from 'react'
import heroImage from '../../public/images/header.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-[url("../../public/images/header.jpg")] bg-cover bg-center' >
        <h1 >Dramatically Engage</h1>
      
    </div>
  )
}

export default Hero
