import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex gap-10 items-center justify-center'>
      <h1 className='text-5xl font-bold'>Home Page</h1>
      <div>
      <Link className='px-8 py-4 rounded-lg text-xl bg-red-300' href={'/about'}>About Page</Link>

      </div>
    </div>
  )
}

export default page
