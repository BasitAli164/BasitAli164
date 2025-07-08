import React from 'react'

const EmailTemplate = () => {
  return (
   <div className=' flex justify-center items-center bg-[#1b1e1f]'>
     <div className='w-1/2  bg-gray-900 text-[#e9e9e9] border-[7px] border-solid border-red-800 shadow-xl'>
        <div className='p-20  text-center'>
            <h1 className='text-4xl font-bold text-[#3092ea] '>Order Confirmed!</h1>
            <p className='text-md mt-3'>Thanks for your order, [Customer Name]</p>
        </div>
        <div className='bg-[#1c1f20] p-10 flex flex-col gap-10'>
            <div>
                <h3 className='text-3xl font-semibold'>Order #[Order Number]</h3>
                <p className='text-xl mt-2'>Placed on [Order Date]</p>
            </div>
            <strong className='font-bold text-3xl text-[#3092ea]'>Total: $[Total Amount]</strong>

        </div>
      
    </div>
   </div>
  )
}

export default EmailTemplate
