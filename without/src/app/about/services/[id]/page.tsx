import React from 'react'

const  page = async({params}) => {
  const parameter=await params
  console.log(parameter)
  return (
    <div>
      <h1>Serverice </h1>
      
    </div>
  )
}

export default page
