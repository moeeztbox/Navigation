import { Number } from "./App"
import React from "react"

function Contact(){

    return(
        <>
        <h3 style={{color:"white"}}>I AM CONTACT PAGE</h3>
        <Number.Consumer>
            {(num)=>{
               return <h1 style={{color:"black"}}>My Number Is {num}</h1>
            }
            }
        </Number.Consumer>
        </>
    )
}
export default Contact