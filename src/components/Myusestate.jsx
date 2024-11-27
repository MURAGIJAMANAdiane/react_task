import React from 'react'
import { useState } from 'react'
function Myusestate() {
  const[num,setnum]=useState(0)
  
  return (
    <div>
      
        <h1>REACT USESTATE HOOKS</h1>
         <p>click to the button to change the number</p>
         <button onClick={()=>setnum(num+1)}>increment number</button>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button onClick={()=>setnum(num-1)}>decrement number</button>
         <p>our changed number is  {num}</p>
      
        
    </div>
  )
}

export default Myusestate