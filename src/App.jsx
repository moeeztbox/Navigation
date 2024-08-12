import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";


function App(){
  const ref=useRef(false)
  const [count,setcount]=useState(0);
const [data,setdata]=useState(0);


useEffect(()=>{
  if(ref.current)return;
  setdata(data+1)
  alert("welcome to the page")
  ref.current=true

},[count])


return(
  <>
    <button onClick={()=>setcount(count+1)}>count{count}</button>
    <button onClick={()=>setdata(data+1)}>update{data}</button>
    <button onClick={()=>setdata(()=>{setdata(0),setcount(0)})}>reset</button>
  </>
)
}
export default App