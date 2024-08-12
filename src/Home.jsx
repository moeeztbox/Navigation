import { Name } from "./App"
import React from "react"

function Home(){

    return(
        <>
        <h3 style={{color:"red"}}>I AM HOME PAGE</h3>
        <Name.Consumer>
            {(name)=>{
               return <h1 style={{color:"blue"}}>My Name Is {name}</h1>
            }
            }
        </Name.Consumer>
        </>
    )
}
export default Home