import { ArrowBigDown, ShoppingCart } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full fixed flex justify-between items-center p-10
    bg-red-900'>
        <div>
            <p>🔥 LOGO</p>
        </div>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Service <ArrowBigDown/></li>
            <li>My Account</li>
            <li><ShoppingCart/> My Cart</li>
        </ul>
      
    </div>
  )
}

export default Header
