import React from 'react'

const Comments = ({params}) => {
    const idparas=  params
    const {parameter}=idparas
    console.log("idparas",parameter)
  return (
    <div>
      <h1>Comments are {parameter}</h1>
    </div>
  )
}

export default Comments
