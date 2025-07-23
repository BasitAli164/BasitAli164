import { title } from 'process';
import React from 'react'
export const generateMetadata=async({params})=>{
  const parametter=await params;
  return {
    title:`Sevcie: ${parametter}`
  }
}

const  page = async({params }) => {
  const parameter=await params
  console.log(parameter)
  return (
    <div>
      <h1>Serverice </h1>
      
    </div>
  )
}

export default page
