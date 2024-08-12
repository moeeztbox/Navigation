import { Abouts } from "./App"
import React from "react"

function About(){

    return(
        <>
        <h3 style={{color:"yellow"}}>I AM ABOUT PAGE</h3>
        <Abouts.Consumer>
            {(about)=>{
               return <h1 style={{color:"green"}}>I am doing {about}</h1>
            }
            }
        </Abouts.Consumer>
        </>
    )
}
export default About