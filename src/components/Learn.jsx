import React, { useEffect, useState } from 'react'
import { Contexts }from '../App'
import { useContext } from "react"
const Learn = () => {
  const number = useContext(Contexts)
    const [count,setCount] = useState(0)
  const HandleChange =()=>{
    setCount(count + 1)
  }
  useEffect(()=>{
    document.title = `title is ${count} `
  },[count])
  return (
    <div>
        <h2>{count} as heading</h2>
        <button onClick={HandleChange}>increment</button>
        <h1>my name is:{number}</h1>
    </div>
  )
}

export default Learn