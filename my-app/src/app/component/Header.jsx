import React from 'react'

const Header = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-around" ,alignItems:"center" ,gap:"10px"}}>
        <h1>Header Component</h1>
        <button style={{padding:"10px 20px", borderRadius:"50px" ,border:"none",cursor:"pointer",fontSize:"20px",fontWeight:"bold"}}> Change count</button>
      
    </div>
  )
}

export default Header
