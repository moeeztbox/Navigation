import { useEffect,useState,useRef } from "react";
import React from "react";
import './App.css'

function App()
{
  const [count,setcount]=useState(0);
  const [data,setdata]=useState(0);

useEffect(() => {
  setdata (data+1)
}, [count])

let btnref=useRef()
useEffect(() => {
  btnref.current.style.backgroundColor="green"
})

  return(
    <>
      <h1 className="h1hw">hello world</h1>
      <button className="btn" onClick={()=> setcount(count+1)}>count {count}</button>
      <button className="btn" ref={btnref} onClick={()=> setdata(data+1)}>update {data}</button>
      <button className="btn" onClick={()=>{setcount(0),setdata(0)}}>reset</button>
      <button className="btn" onClick={()=>{btnref.current.style.display='none'}}>hide</button>
      <button className="btn" onClick={()=>{btnref.current.style.display=''}}>show</button>
    </>
  )
}
export default App