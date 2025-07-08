import React from 'react'

const EmailTemplate = () => {
  return (
    <div className='h-screen w-full'>
        <div className='p-24 bg-blue-400 text-center'>
            <h1 className='text-5xl font-bold '>Order Confirmed!</h1>
            <p className='text-xl mt-3'>Thanks for your order, [Customer Name]</p>
        </div>
        <div>
            <div>
                <h3>Order #[Order Number]</h3>
                <p>Placed on [Order Date]</p>
            </div>

        </div>
      
    </div>
  )
}

export default EmailTemplate
