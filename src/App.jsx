import React from "react";
import { createContext } from "react";
import Contact from "./Contact";
import Home from "./Home";
import About from "./AboutUs";

const Number = createContext();
const Name=createContext();
const Abouts=createContext();

function App() {
  

  return (
    <>
      <Number.Provider value={"123456"}>
        <Name.Provider value={"Moeez"}>
          <Abouts.Provider value={"Graduation"}>
            <Home/>
            <About/>
            <Contact />
          </Abouts.Provider>
        </Name.Provider>
      </Number.Provider>
    </>
  );
}
export default App;
export {Name};
export {Number};
export {Abouts};
