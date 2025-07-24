import { ArrowBigDown, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full fixed flex justify-between items-center p-5
    bg-red-900'>
        <div>
            <p>🔥 LOGO</p>
        </div>
        <ul>
           <Link href={'/'}>Home</Link>
           <Link href={'/product'}>Product</Link>
           <Link href={'/service'}>Service</Link>
           <Link href={'/account'}>My Account</Link>
           <Link href={'/account'}>My Account</Link>
           

        </ul>
      
    </div>
  )
}

export default Header
